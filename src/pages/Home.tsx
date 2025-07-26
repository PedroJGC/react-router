import { useNavigate } from 'react-router'

export function Home() {
  const navigate = useNavigate()

  function productsOpen() {
    navigate('/products')
  }

  return (
    <div>
      <h1>Home</h1>

      <nav>
        <a href="/products">Products</a>
        <a href="/products?category=tvs">Category</a>

        <button onClick={productsOpen} type="button">
          Ver produtos
        </button>
      </nav>
    </div>
  )
}
