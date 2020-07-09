import React from "react";

class QuoteBar extends React.Component {
  render() {
    return (
      <div className="container-fluid footer">
        <center>
          <h1>Insure your watch in 3 minutes</h1>
        </center>
        <footer class="page-footer font-small special-color-dark pt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-4">
                <form class="form-inline">
                  <input
                    class="form-control form-control mr-3 w-75"
                    type="number"
                    placeholder="Zip Code"
                    aria-label="Zip Code"
                  />
                  <i class="fas fa-zip" aria-hidden="true"></i>
                </form>
              </div>

              <div class="col-md-6 mb-4">
                <form class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend3">
                      $
                    </span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Collection Value"
                    aria-label="Collection Value"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-sm btn-secondary" type="button">
                      Get Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default QuoteBar;
