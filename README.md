#



## trouble shooting

### mojibake

check your powershell encoding

```powershell
[Console]::OutputEncoding.EncodingName
```

if output utf8以外なら

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```

