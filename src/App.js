import React, { Component } from "react";
import './App.css';
import Movie from './Movie';







class App extends Component{

  state = {
    movies : [
      {
        title : '어벤져스:엔드게임',
        poster :'http://image.cine21.com/resize/cine21/poster/2019/0417/11_38_55__5cb691bfbbfd0[X230,330].jpg'
      },
      {
        title : '뷰티플 마인드',
        poster : 'http://image.cine21.com/resize/cine21/poster/2019/0401/11_21_21__5ca175a16e3a9[X230,330].jpg'
      },
      {
        title : '어스',
        poster : 'http://image.cine21.com/resize/cine21/poster/2019/0329/18_08_19__5c9de0836c615[X230,330].jpg'
      },
      {
        title : '선희와 슬기',
        poster : 'http://image.cine21.com/resize/cine21/poster/2019/0312/10_38_58__5c870db299a3a[X230,330].jpg'
      }
    
    ]
  }

  //5초 뒤에 새로운 영화가 추가 되기
 componentDidMount(){
  setTimeout(()=>{
    this.setState({
      movies:[
        ...this.state.movies,
        {
          title : '하스스톤',
          poster : 'http://image.cine21.com/resize/cine21/poster/2019/0404/10_55_18__5ca56406df55d[X230,330].jpg'
        }
      ]
    })
  },5000);
} 




  render(){

    return(
      <div className = "App">
        {
          this.state.movies.map((x,index)=>{
            return <Movie title={x.title} poster={x.poster} key={index}/>
          })
        }
      </div>
    );
  }//render

}

export default App;