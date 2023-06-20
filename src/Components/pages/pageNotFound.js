import React from 'react'
import { Link } from 'react-router-dom';
function pageNotFound() {
  return (
    <div class="modal fade show"style= {{display:"block"}}>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">404 Page Not Found
          </h1>
         
        </div>
        <div class="modal-body">
        Unfortunately the page you are looking for has been moved or deleted

        </div>
        <div class="d-grid mx-auto col-4 mb-3">
          <Link type="button" to= "home" class="btn
           btn-primary">
            Go TO Home Page
            </Link>
     
        </div>
      </div>
    </div>
  </div>
  )
}

export default pageNotFound;