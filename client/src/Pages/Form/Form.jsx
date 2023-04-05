import React from 'react'

function Form() {
  return (
    <div>
      <form action="">
        <label htmlFor="name"></label>
        <input type="text" name='name' id='name'/>
        <label htmlFor="minHeight"></label>
        <input type="text" name='minHeight'/>
        <label htmlFor="maxHeight"></label>
        <input type="text" name='maxHeight'/>
        <label htmlFor="minWeight"></label>
        <input type="text" name='minWeight'/>
        <label htmlFor="maxWeight"></label>
        <input type="text" name='maxWeight'/>
        <label htmlFor="minLifeSpan"></label>
        <input type="text" name='minLifeSpan'/>
        <label htmlFor="maxLifeSpan"></label>
        <input type="text" name='maxLifeSpan'/>
        <label htmlFor="image"></label>
        <input type="text" name='image'/>
        <div>
          Aca lo de imagenes
        </div>
      </form>
    </div>
  )
}

export default Form