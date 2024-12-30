
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidprinciple,setInvalidprinciple] = useState(false)
  const [invalidrate,setInvalidrate] = useState(false)
  const [invalidyear,setInvalidyear] = useState(false)


  const validateinputs = (tag) => {
    console.log(typeof tag);
    const { name, value } = tag
    console.log(name, value);
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name == 'principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidprinciple(false)
      }else{
        setInvalidprinciple(true)
}
    }
  if(name == 'rate'){
  setRate(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidrate(false)
  }else{
    setInvalidrate(true)
}
  }

if(name == 'year'){
  setYear(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidyear(false)
  }else{
    setInvalidyear(true)
}

}

}

const handleCalculate = (e)=>{
  e.preventDefault()
  console.log("inside calculate");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert('Please fill the form completely')
  }
  
}

const handleReset =()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInvalidprinciple(false)
  setInvalidrate(false)
  setInvalidyear(false)
}


  




  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5'>
          <h3 className='text-center'>Simple Interest Calculator</h3>
          <p className='text-center'> Calculate your simple Interest</p>
          <div className='bg-warning p-5 text-light text-center rounded'>
            <h1>{interest}</h1>
            {/* <p>₹ 1400</p> */}
            <p className='fw-bolder'>Total simple interest</p>

          </div>
          <form className='mt-3'>
            {/* Principle Amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />

            </div>

{/* Invalid principle */}
{invalidprinciple && <div className='text-danger fw-bolder mb-3'>
  Invalid principle amount
</div>
}


            {/* Rate Amount */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-Rate" label="Rate of interest" variant="outlined" />

            </div>

            {/* Invalid rate */}
{invalidrate && <div className='text-danger fw-bolder mb-3'>
  Invalid rate amount
</div>
}


            {/* Year */}
            <div className='mb-3'>
              <TextField value={year || ""} name='year' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />

            </div>

            {invalidyear && <div className='text-danger fw-bolder mb-3'>
  Invalid year
</div>
}


            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidprinciple || invalidrate || invalidyear} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} className='border border-dark text-dark' variant="outlined">Reset</Button>
            </Stack>

          </form>

        </div>

      </div>

    </>
  )
}

export default App
