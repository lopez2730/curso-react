import { useId, useState } from 'react'
import './Filters.css'

export function Filters ({onChange}) {
const [minPrice, setMinPrice] = useState(0)
const minPriceFilterId = useId()
const categoryFilterId = useId()


const handleChangeMinPrice = (event) => {
  setMinPrice(event.target.value)
  onChange( prevState => ({
    ...prevState,
    minPrice: event.target.value
  }))
}

const handleChangeCategory = (event) => {
  onChange(prevState => ({
    ...prevState,
    category: event.target.value
  }))
}

  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>Category</label>
        <input 
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categorías</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>

    </section>
  )
}