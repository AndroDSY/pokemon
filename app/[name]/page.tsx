import Cards from '../../components/Cards'

export default function Page({ params }:any) {

  return(<>
  <input id='nameinput'></input>
  <Cards name={params.name}></Cards>
  <script src='/reloader.js'></script>
  </>
  )
  }