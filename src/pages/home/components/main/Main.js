import React from "react";

class Main extends React.Component{
    render() {
        return (
            <React.Fragment>
            <div className="hero-wrap js-fullheight" style={{backgroundImage: `url('images/bg_5.jpg')`, height:window.innerHeight}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent={true}>
                        <div className="col-md-7 ftco-animate">
                            <span className="subheading">Welcome to Pacific</span>
                            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                            <p className="caps">Travel to the any corner of the world, without going around in circles</p>
                        </div>
                        <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                            <span class="fa fa-play"></span>
                        </a>
                    </div>
                </div>
            </div>


                <section className="ftco-section ftco-no-pb ftco-no-pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ftco-search d-flex justify-content-center">
                                    <div className="row">
                                        <div className="col-md-12 nav-link-wrap">
                                            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

                                                <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a>

                                            </div>
                                        </div>
                                        <div className="col-md-12 tab-wrap">

                                            <div className="tab-content" id="v-pills-tabContent">

                                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                                    <form action="#" className="search-property-1">
                                                        <div className="row no-gutters">
                                                            <div className="col-md d-flex">
                                                                <div className="form-group p-4 border-0">
                                                                    <label htmlFor="#">Destination</label>
                                                                    <div className="form-field">
                                                                        <div className="icon"><span className="fa fa-search"></span></div>
                                                                        <input type="text" className="form-control" placeholder="Search place"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md d-flex">
                                                                <div className="form-group p-4">
                                                                    <label htmlFor="#">Check-in date</label>
                                                                    <div className="form-field">
                                                                        <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                        <input type="text" className="form-control checkin_date" placeholder="Check In Date"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md d-flex">
                                                                <div className="form-group p-4">
                                                                    <label htmlFor="#">Check-out date</label>
                                                                    <div className="form-field">
                                                                        <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                        <input type="text" className="form-control checkout_date" placeholder="Check Out Date"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md d-flex">
                                                                <div className="form-group p-4">
                                                                    <label htmlFor="#">Price Limit</label>
                                                                    <div className="form-field">
                                                                        <div className="select-wrap">
                                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                                            <select name="" id="" className="form-control">
                                                                                <option value="">$100</option>
                                                                                <option value="">$10,000</option>
                                                                                <option value="">$50,000</option>
                                                                                <option value="">$100,000</option>
                                                                                <option value="">$200,000</option>
                                                                                <option value="">$300,000</option>
                                                                                <option value="">$400,000</option>
                                                                                <option value="">$500,000</option>
                                                                                <option value="">$600,000</option>
                                                                                <option value="">$700,000</option>
                                                                                <option value="">$800,000</option>
                                                                                <option value="">$900,000</option>
                                                                                <option value="">$1,000,000</option>
                                                                                <option value="">$2,000,000</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md d-flex">
                                                                <div class="form-group d-flex w-100 border-0">
                                                                    <div class="form-field w-100 align-items-center d-flex">
                                                                        <input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                                                    <form action="#" class="search-property-1">
                                                        <div class="row no-gutters">
                                                            <div class="col-lg d-flex">
                                                                <div class="form-group p-4 border-0">
                                                                    <label for="#">Destination</label>
                                                                    <div class="form-field">
                                                                        <div class="icon"><span class="fa fa-search"></span></div>
                                                                        <input type="text" class="form-control" placeholder="Search place"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg d-flex">
                                                                <div class="form-group p-4">
                                                                    <label for="#">Check-in date</label>
                                                                    <div class="form-field">
                                                                        <div class="icon"><span class="fa fa-calendar"></span></div>
                                                                        <input type="text" class="form-control checkin_date" placeholder="Check In Date"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg d-flex">
                                                                <div class="form-group p-4">
                                                                    <label for="#">Check-out date</label>
                                                                    <div class="form-field">
                                                                        <div class="icon"><span class="fa fa-calendar"></span></div>
                                                                        <input type="text" class="form-control checkout_date" placeholder="Check Out Date"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg d-flex">
                                                                <div class="form-group p-4">
                                                                    <label for="#">Price Limit</label>
                                                                    <div class="form-field">
                                                                        <div class="select-wrap">
                                                                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                                                            <select name="" id="" class="form-control">
                                                                                <option value="">$100</option>
                                                                                <option value="">$10,000</option>
                                                                                <option value="">$50,000</option>
                                                                                <option value="">$100,000</option>
                                                                                <option value="">$200,000</option>
                                                                                <option value="">$300,000</option>
                                                                                <option value="">$400,000</option>
                                                                                <option value="">$500,000</option>
                                                                                <option value="">$600,000</option>
                                                                                <option value="">$700,000</option>
                                                                                <option value="">$800,000</option>
                                                                                <option value="">$900,000</option>
                                                                                <option value="">$1,000,000</option>
                                                                                <option value="">$2,000,000</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg d-flex">
                                                                <div class="form-group d-flex w-100 border-0">
                                                                    <div class="form-field w-100 align-items-center d-flex">
                                                                        <input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary p-0"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>

        );
    }
}export default Main;