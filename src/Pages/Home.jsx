import Heroslider from '../components/Heroslider'
import CategoryRow from '../components/CategoryRow'

const Home = () => {
  return (
    <main>
      <Heroslider />

      <div className="max-w-6xl mx-auto">
        <CategoryRow
          title="Trending Now"
          endpoint="trending/movie/week"
        />

        <CategoryRow
          title="Top Rated"
          endpoint="movie/top_rated"
        />

        <CategoryRow
          title="Action"
          endpoint="discover/movie"
          params={{ with_genres: 28 }}
        />

        <CategoryRow
          title="Comedy"
          endpoint="discover/movie"
          params={{ with_genres: 35 }}
        />

        <CategoryRow
          title="Bollywood"
          endpoint="discover/movie"
          params={{ region: 'IN', with_original_language: 'hi' }}
        />


        <CategoryRow
          title="South Movies (Tamil)"
          endpoint="discover/movie"
          params={{ with_original_language: 'ta', region: 'IN' }}
        />

        <CategoryRow
          title="South Movies (Telugu)"
          endpoint="discover/movie"
          params={{ with_original_language: 'te', region: 'IN' }}
        />
      </div>
    </main>
  )
}

export default Home
