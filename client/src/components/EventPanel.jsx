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
    <div>
        <form onSubmit={formHandler}>
        <h3>EventPanel</h3>
        <input name='Title' placeholder={title} value={title} onChange={e => {setTitle(e.target.value)}}/>
        <input name='Description' placeholder={description} value={description} onChange={e => setDescription(e.target.value)}/>
        <h6>upload image</h6>

        <input type='submit'/>
        </form>
    </div>
  )
}
