return (
  <div>
    <div className="App">
      <div className="whiteContainer">
        <h1 className="userTitle">Welcome username</h1>
        <p className='question'>1.How would you rate your current skillset?</p>
        <div className="container">  
          <button className='levels' onClick={(e)=>handleClick(e)} >Beginner - New to cybersecurity with limited theoritical knowledge and no hands on experience</button>
          <button className='levels' onClick={(e)=>handleClick(e)} >Basic - Worked on few basic tasks or projects with minimal practical experience</button>
          <button className='levels' onClick={(e)=>handleClick(e)} >Intermediate - Have hands on experience and able to handle common security tasks independently</button>
          <button className='levels' onClick={(e)=>handleClick(e)}>Advance - Extensive experience managing complex security challange</button>
          <button className='levels' onClick={(e)=>handleClick(e)} >Expert - Lead critical projects mentor others with deep expertise</button>
        </div>
        <p className='question'>6.How Do you prefer to learn new skills?</p>
        <div className="container">  
          <button className='levels' >Hands on experience</button>
          <button className='levels' >Reading Documentation</button>
          <button className='levels' >Vedios</button>
          <button className='levels' >Assessments - Extensive experience managing complex security challange</button>
        </div>
      </div>
    </div>
      <Message name="ans" names="npm" Parentfunction={this.Parentfunction} ></Message>

    </div>
  );
