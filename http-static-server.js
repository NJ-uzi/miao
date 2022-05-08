const http = require('http')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const mime = require('mime')


const server = http.createServer()
const port = 8888
const baseDir = 'C:/Users/Lenovo/Desktop/miao'


server.on('request', async (req, res) => {
  req.url = path.posix.join(req.url)


  var urlObj = new URL(`http://xx${req.url}`)

  console.log(req.method, decodeURIComponent(urlObj.pathname) + urlObj.search)

  const targetPath = path.join(baseDir, decodeURIComponent(urlObj.pathname))

  if (!targetPath.startsWith(baseDir)) {
    res.writeHead(404)
    res.write('404 Not Found')
    res.end()
    return
  }

  try {
    var stat = await fsp.stat(targetPath)
    if (stat.isFile()) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8',
      })

      var readable = fs.createReadStream(targetPath)
      readable.on('data', data => {
        res.write(data)
      })

      readable.on('end', () => {
        res.end()
      })
      // res.write(data)
      // res.end()

    } else if (stat.isDirectory()) {

      if (urlObj.pathname.at(-1) == '/') {
        var indexPath = path.join(targetPath, 'index.html')
        try {
          // 读取文件状态，如果不存在则会抛出
          var indexStat = await fsp.stat(indexPath)
          if (indexStat.isFile()) { //路径存在，并且是文件
            var indexContent = await fsp.readFile(indexPath)
            res.writeHead(200, {
              'Content-Type': 'text/html; charset=UTF-8'
            })
            res.write(indexContent)
            res.end()
          } else { // 不是文件，则抛出
            throw 'index is not a file'
          }
        } catch (e) { // 文件不存在，列出文件夹的列表
          var entries = await fsp.readdir(targetPath, { withFileTypes: true })
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
          })

          res.write('<ul>')
          res.write(`<li><a href="../">../</a></li>`)
          for (let entry of entries) {
            let slash = entry.isDirectory() ? '/' : ''
            res.write(`<li><a href="${path.posix.join(urlObj.pathname, entry.name)}${slash}">${entry.name}${slash}</a></li>`)
          }
          res.write('</ul>')
          res.end()
        }
      } else {
        res.writeHead(302, {
          Location: `http://${req.headers.host}${req.url}/`,
        })
        res.end()
      }

    } else {
      throw 'not a file or directory'
    }

  } catch (e) {
    console.log(e)
    res.writeHead(404)
    res.write(String(e))
    res.end()
  }

})




server.listen(port, () => {
  console.log('listening on port', port)
})

