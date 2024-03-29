import Brands from '../../components/common/brands/index.jsx'
import Categories from '../../components/common/categories/index.jsx'
import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
import { products } from '../../mock/produtos.js'

const Home = () => {
  return (
    <>
      <MainLayout>
        <Categories />
        <CardContainer>
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              productImage={product.image}
              id={product.id}
            />
          ))}
        </CardContainer>
        <Brands />
      </MainLayout>
    </>
  )
}

export default Home
