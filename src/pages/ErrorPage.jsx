import React,{useEffect} from 'react'
import "../Pagescss/ErrorPage.css"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  useEffect(()=>{
    const navbar = document.getElementById("navbar")
    navbar.style.display = "none"
  },[])
  return (
    <div className='error'>
      <div>
        <div className='container-box container-star'>
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-1' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
          <div className='star-2' />
        </div>
        <div className='container-box container-bird'>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='bird bird-anim'>
            <div className='bird-container'>
              <div className='wing wing-left'>
                <div className='wing-left-top' />
              </div>
              <div className='wing wing-right'>
                <div className='wing-right-top' />
              </div>
            </div>
          </div>
          <div className='container-title'>
            <div className='title'>
              <div className='number'>4</div>
              <div className='moon'>
                <div className='face'>
                  <div className='mouth' />
                  <div className='eyes'>
                    <div className='eye-left' />
                    <div className='eye-right' />
                  </div>
                </div>
              </div>
              <div className='number'>4</div>
            </div>
            <div className='subtitle'>
              Oops. Looks like you took a wrong turn.
            </div>
            <Link to='/' className='gotohome'>
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage