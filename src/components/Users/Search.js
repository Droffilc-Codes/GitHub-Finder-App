import React, { useContext, useState } from 'react'
import GithubContext from '../../Context/github/githubContext'
import AlertContext from '../../Context/alert/alertContext'

const Search = ()=> {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

 
  

  const onSbmit = e => {
    e.preventDefault()
    if(text === ''){
      alertContext.setAlert('Please enter something!', 'light')
    }else {
      githubContext.searchUsers(text)
      setText(text)
    }
  }

  const onChange = (e)=> setText(e.target.value)
  

    return (
      <div>
        <form onSubmit={onSbmit} className="form">
          <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange}/>
          <input type="submit" value="Search" className='btn-dark btn-block' />
        </form>
        {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
        
      </div>
    )
  
}

export default Search

