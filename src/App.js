import React, { Component } from "react";
import './App.css';
import Movie from './Movie';







class App extends Component{

  state = {}

  /* 
    async, await
    fetch로 받아온 데이터와 그걸 처리하는 then들을 더욱 간결하고 명료하게 만들어주는 도구
    fetch와 then을 사용해서 일일이 모든 동작을 지정해주지 않고, fetch가 끝난 다음 바로 실행시킬 것들을 지정할 수 있게 만드는 tool

    asynce:이전라인의 작업이 끝날때까지 기다리지 않고 실행 될 작업

    await : 해당 기능이 끝나는 것을 기다리고, 바로 실행. asynce가 실행 되고 await 실행 됨.

    fetch(주소).then(a => a.json()).then(b=>b.....).then(...).then(...)

  */
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')//fetch() 자바스크립트로 외부의 url을 가져옴
    .then(b => b.json())//json으로 바꿈
    .then(c => c.data.movies)
    .catch(err => console.log(err));//에러가 났을 때 catch
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  //5초 뒤에 새로운 영화가 추가 되기
 componentDidMount(){
   
   this._getMovies()

    
} 

// _renderMovies =()=>{}  이름을 가진 화살표 함수
_renderMovies =()=>{
  const movies = this.state.movies.map((x,index)=>{
    return <Movie 
    title={x.title} 
    poster={x.medium_cover_image} 
    key={index} 
    genres={x.genres}
    synopsis={x.synopsis}/>
  });
  return movies;
}


  render(){

    return(
      <div className = "App">
        {
          //this.state.movies가 있을 땐 render
          //state가 비어있는 상황일 땐 loading... 문구
          this.state.movies ? this._renderMovies() : 'Loading . . .'
          /* 
          if(this.state.movie){
            this._renderMovies()
          }else{
            Loading...
          }
          */
        }
      </div>
    );
  }//render

}

export default App;