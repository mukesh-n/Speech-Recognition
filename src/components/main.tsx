import useSpeechRecognition from '../hooks/useSpeechRecognition'

const Main = () => {
  const {
text ,
    startListening,
stopListerning,
islisterning,
hasRecognitionSupport
  }  = useSpeechRecognition()

  const startListeningWithParams = (languageCode: string) => {
    startListening({ lang: languageCode });
  };
  return (
    <div>
      {hasRecognitionSupport ? (
          <div className = "d-flex flex-column align-items-center justify-content-center bg-dark" style={{height: "100vh"}}>
           <div className='row w-100 g-0 h-100 d-flex align-items-center justify-content-center '>
            <div className = "col-7 d-flex flex-column align-items-center p-3 rounded shadow border" style={{ height: "70vh", backgroundColor: "#747495" }}
>
           <div className="row w-100   g-0">
            <div className='col pe-2'>
            <button className='btn w-100 btn-sm btn-dark mb-3' onClick={() => {!islisterning && startListeningWithParams('ta-IN')}}   >
              Speech Recognition(Tamil)
            </button>
            </div>
            <div className='col ps-2'>
            <button className='btn w-100 btn-sm btn-dark mb-3' onClick={() => {!islisterning &&  startListeningWithParams('en-US')}}   >
            Speech Recognition(English)
            </button>
            </div>

            </div>

            <div className=' text-muted   px-3 py-3 mt-5 h5'>
            {islisterning && <p>Listening...</p>}
            {text && <div className="bg-white shadow-sm rounded px-3 py-2">{text}</div>}
                </div>

            </div>
            </div>

          </div>
    
      ) : (
        <p>Speech recognition is not supported in your browser.</p>
      )}
    </div>
  );
  
}


export default Main