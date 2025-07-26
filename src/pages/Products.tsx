import { useSearchParams } from 'react-router'

export function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  return (
    <div>
      <nav>
        <a href="/">Home</a>
      </nav>

      <h1>Products</h1>

      {category && (
        <span>
          Category <strong>{category}</strong>
        </span>
      )}
    </div>
  )
}
