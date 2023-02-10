import { useState } from 'react'
import { QRCode } from 'qrcode'


function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err,url) =>{
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="App">
      <h1>QR code Generator</h1>
      
      <input type="text" 
      placeholder="e.g. https://google.com"
      value={url}
      onChange={(evt) => setUrl(evt.target.value)}/>
      

      <button onClick={GenerateQRCode}>Generate</button>
      <img src={qrcode} />
    </div>
  )
}

export default App
