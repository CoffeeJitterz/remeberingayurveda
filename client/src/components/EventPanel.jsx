import {useState} from 'react'

export default function EventPanel() {
    const [title, setTitle] = useState('Title')
    const [description, setDescription] = useState('Description')
    console.log(title, description)

    const [output, setOutput] = useState({title: 'default', desctiption: 'default'})
    console.log(output)

    const formHandler = e => {
        e.preventDefault()
        setOutput({title, description})
    }

    // const output = {title, description}
  return (
    <div className='event_panel_container'>
        <form className='event_panel_form' onSubmit={formHandler}>
        <h3>EventPanel</h3>
            <div className='event_controls'>
                <input name='Title' type='text' placeholder={title} value={title} onChange={e => {setTitle(e.target.value)}}/>
                <textarea name="paragraph_text" cols="50" rows="10" value={description} onChange={e => setDescription(e.target.value)}/>
                 <h6>upload image</h6>
            </div>
        <input type='submit' className='button' />
        </form>
    </div>
  )
}
