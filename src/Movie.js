import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

/* 
class Movie extends Component...
클래스형 컴포넌트
장점 : state를 쓸 수 있음
단점 : 코드가 복잡해짐

function Movie({porops1, props2...})
함수형 컴포넌트 (dumb component)
단지 어떤 값을 return 해서 출력해주기만을 위한 컴포넌트
장점 : 코드가 단순함
단점 : state가 없음
*/


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="card">
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
            <p>
            {genres.map((y,index)=><MovieGenres genres={y} key={index}/>)}
            {/* 
            <MovieGenres genres={sf} key={0}/>
            <MovieGenres genres={drama} key={1}/>
            <MovieGenres genres={comic} key={2}/>
            <MovieGenres genres={romantic} key={3}/>
            */}
            </p>
            <p>
                {/* lineEllipsis 외부의 컴포넌트를 연결 */}
                <LinesEllipsis
                text={synopsis}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
                />   
            </p>
        </div>
    )
}

function MovieGenres({genres}){
    return(
        <span>{genres}</span>
    )
}
    


/* 
class Movie extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render(){
        return (
            <div>    
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );

    }
}

 */


/* 
component
- props : 부모로부터 받아오는 값(읽기 전용)
- state : 각각의 컴포넌트가 가지는 객체
          state에 변경사항이 있을 때 마다 componenet가 새로 랜더링 된다.
*/



function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}



/* class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render(){
        return <img src={this.props.poster}/>;
    }
} */

Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}

export default Movie;