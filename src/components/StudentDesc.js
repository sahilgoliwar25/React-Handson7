import React from 'react'

const StudentDesc = () => {
  return (
    <div className='body-container'>
            
            {this.state.clicked
            ?<>
            <form>
                <>
                <label htmlFor='name'>Name </label>
                <input id='name' type='text' placeholder='Name' name='Name' value={this.state.Name} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='dept'>Department </label>
                <input id='dept' type='text' placeholder='Department' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='rating'>Rating </label>
                <input id='rating' type='text' placeholder='Rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/><br/>
                </>
                <button className='css-button-neumorphic' onClick={this.clickHandle} type='button'>Submit</button>
            </form>
            
            </>
            :
            <FormDisplay value={this.state.EmpData} toggleFunc={this.toggleFunction}/>
        }
      </div>
  )
}

export default StudentDesc