import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { priceFormatter } from '../../utils'
import { useFetchProductById } from '../../hooks/dataFetching/useFetchProductByID'
import { Carousel } from '../../components/common/carousel'

import { InfoArea, ProdArea, ProdName, SelectionArea, Slides } from './styles'

//Mock images
const imgBaseUrl = '../src/assets/images'
const images = [
  `${imgBaseUrl}/img1.jpg`,
  `${imgBaseUrl}/img2.jpg`,
  `${imgBaseUrl}/img3.jpg`,
  `${imgBaseUrl}/img4.jpg`,
  `${imgBaseUrl}/img5.jpg`,
]

const Product = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState({})
  const { FetchProductById } = useFetchProductById()
  const navigate = useNavigate()

  //Manages the display of product display errors
  const handleError = error => {
    if (error) {
      if (error.response) {
        if (error.response.data.message === 'Falha na requisição') {
          toast.warn(error.response.data.details[0].message, {
            toastId: 'warnning',
          })
        } else {
          toast.warn(error.response.data.message, { toastId: 'warnning' })
        }
        navigate('/')
      } else {
        navigate('/')
        return toast.error('Produto não encontrado', { toastId: 'warnning' })
      }
    }
  }

  //Upload product information
  useEffect(() => {
    FetchProductById(id, setItem, handleError)
    //eslint-disable-next-line
  }, [id])

  //Add the product to the shopping cart
  const addToCart = () => {
    if (item.available) {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart) {
        let hasTheProduct = cart.some(product => product.id === id)
        cart = hasTheProduct
          ? cart.map(product =>
              product.id === id
                ? (product = {
                    ...item,
                    quantity: +product.quantity + +quantity,
                  })
                : product,
            )
          : [...cart, { ...item, quantity }]
      } else {
        cart = [{ ...item, quantity }]
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      toast.success('Produto adicionado ao carrinho', { toastId: 'success' })
    } else {
      toast.warn('Produto indisponível', { toastId: 'unavailable' })
    }
  }

  return (
    <>
      <MainLayout>
        <ProdArea>
          <ProdName>
            <h1>{item.name}</h1>
            <hr />
          </ProdName>
          <Slides>
            <Carousel slides={images} />
          </Slides>
          <InfoArea>
            <p>{item.description}</p>
            {/* <a>Mais informações</a> */}
            <hr />
          </InfoArea>
          <SelectionArea>
            <p>{priceFormatter(item.price, 'BRL')}</p>
            <div>
              <div>
                <label htmlFor="quantity">Quantidade</label>
                <select
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <button onClick={addToCart}>Adicionar ao carrinho</button>
            </div>
          </SelectionArea>
        </ProdArea>
      </MainLayout>
    </>
  )
}

export { Product }
