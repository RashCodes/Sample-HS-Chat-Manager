import React from 'react'

function Recipients() {
  return (
   <>
          <div className="mb-2">
            <label className="form-label" style={{fontSize: '16px'}}>Recipients</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Recipients" />
        </div>
        
        <div className="mb-2">
            <label className="form-label" style={{fontSize: '16px'}}>Message</label>
            <textarea className="form-control" style={{resize: 'none'}} id="exampleFormControlTextarea1" rows={16} defaultValue={""} />
        </div>
   </>
  )
}

export default Recipients;