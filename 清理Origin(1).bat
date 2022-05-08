@echo off


del /f /s /q C:\Users\Administrator\AppData\Roaming\Origin\*.*
rd /q /s C:\Users\Administrator\AppData\Roaming\Origin\
md C:\Users\Administrator\AppData\Roaming\Origin

del /f /s /q C:\Users\Administrator\AppData\Local\Origin\*.*
rd /q /s C:\Users\Administrator\AppData\Local\Origin\
md C:\Users\Administrator\AppData\Local\Origin

pause