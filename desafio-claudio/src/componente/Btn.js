import'./style.css'

function Btn() {
  return (
    <div className="container">
      <form action="" method='get'>
        <div className='box-text'>
          <p>
            <label for="box1">First name</label>
            <input type="text" name="box1" id="box1" placeholder='first...'/>
          </p>
          <p>
            <label for="box2">Last name</label>
            <input type="text" name="box2" id="box2" placeholder='last...'/>
          </p>
        </div>
        <input className='btn' type='submit' value='to send'/>
      </form>
    </div>
  )
};

export default Btn