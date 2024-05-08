import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
<div className='color'>
    <div className='container-fluid'>
        <div className='row' >

        <div className='col-sm-1' id='img'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' width={65} height={35}/>
        </div>


<div className='col-sm-1'>
        <nav class="navbar navbar-lg tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link text-light active" aria-current="page" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">TV Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Awards&Events</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Watch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
    </div>

    <div className='col-sm-6'>

    <nav class="navbar">
  <form class="container-fluid">
    <div class="input-group">
      
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>

</div>


<div className='col-sm-4' id='btn'>

<button type="button" class="btn"><img src='https://m.media-amazon.com/images/G/01/IMDbPro/images/IMDbPro_brand_logo_small._SL1280_FMpng_.png' width={60} height={40}/></button>

<Link to="./Products">
<button type="button" class="btn text-primary">Watchlist</button>
</Link>

<button type="button" class="btn text-white">Sign In</button>



<button type="button" class="btn text-white">English</button>
</div>


</div>



</div>


<div className='container'>
<div className='row m-2 outline-light'>

<img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e54fd873-766c-453d-86ec-0408903fe6b7.jpg' width={0} height={270}/>

</div></div>


<div className='container-fluid'>
<div className='row'>

<div className='col-sm-8'>
    <div className='row'>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
 
 
      <img src="https://m.media-amazon.com/images/M/MV5BNDljNmM0ZjctODBhZC00YWU3LWJkNzQtZmFlYjQxYzY1OTM1XkEyXkFqcGdeQXVyMTc2NzQ2ODE5._CR13,13,1244,700.jpg" class="d-block w-100" alt="..." height={585}/>

        <div class="carousel-caption d-none d-md-block text-bold">
 
       
         <h2>Medha Shankar Recieves The IMDb STARmeter Award</h2>
        <p>Talks About Her First Audition,'12th Fail'and More!</p>
      </div>  
        
    </div>

    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://www.filmpost.it/wp-content/uploads/2024/02/the-watchers.jpg" class="d-block w-100" alt="..." height={585}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>The Watchers</h1>
        <p>Watch The Trailer</p>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://awbi.in/wp-content/uploads/2024/02/Shogun-Season-1-Episode-1-and-2-Recap-1024x538.png" class="d-block w-100" alt="..." height={585}/>
      <div class="carousel-caption d-none d-md-block">
      <p>5 Things To Stream This Week</p>
       
        <h3>"Shogun,"Sandler in'Spiceman'and More</h3>
      </div>
    </div>
    
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://m.media-amazon.com/images/M/MV5BMGM4MTliOWYtNWFmOS00NTM2LWEyYTUtYzdlMTc1OGEzYTE5XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UY281_CR0,0,500,281_.jpg" class="d-block w-100" alt="..."height={585}/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Boys Kills The World</h2>
        <p>Watch The Trailer</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://m.media-amazon.com/images/M/MV5BYjFmMTY5MDMtOTQ3Ni00NzdkLWJkZTYtNWIwYmQ1NzRkZTU5XkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg" class="d-block w-100" alt="..." height={585}/>
      <div class="carousel-caption d-none d-md-block">
        <h2>The Rise OF Emma Stone</h2>
        <p>From 'Superbad' To 'Poor Things'</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<img src=''/>

    </div>
</div>

<div className='col-sm-4'>
   

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="https://upload.wikimedia.org/wikipedia/en/b/b7/The_Watchers_film_poster.jpg" class="img-fluid rounded-start" alt="..." id='watchers'/>
    </div>
    <div class="col-md-6">
      <div class="card-body" id='end'>
        <h5 class="card-title">The Watchers</h5>
        <p class="card-text"><small class="text-body-secondary">Watch The Trailer</small></p>
      </div>
    </div>
  </div>
</div>
   

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8NDxAPFQ8QFRIVEA8QFhUVDxUVFRYYFxUVFRYYHCggGBomHRMWIjEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGy0lHSUtLS0tLS0tKystLSstLS0tLS0tLS0tKystLTArLS0tLS0tLS4tLS0tLS0tLy0uLS0tLf/AABEIAREAuAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABMEAABAwIDAgkECw8EAwAAAAABAAIDBBEFEiExUQYHEyJBYXGRkhQyU4EVF1JzgqGxstHh8BYjNDVCQ1RicpOis8LS8TN0wdMlY2T/xAAbAQACAgMBAAAAAAAAAAAAAAAAAgEFAwQGB//EADkRAAEDAgIGCAUDAwUAAAAAAAEAAhEDBCExBRJBUWFxEyIygZGhscEGQlLR8BQjcjOC4SRikqLx/9oADAMBAAIRAxEAPwDDoiLvlQIiIhCIiIQiIiEIiIhCIiIQiIiEIiIpUExiUU9n1KsMtq7Tq23+3/KZugXA3KovNL0aPVZ1ncMhzPsO+F0ujPhm6u4fV/bZxHWPJpxHMxvAcgYBt1O7d6wocb6qUXMXN5WuHTUd3ZAch7mTxXoNhou1sWatBsHaTi48z7YN3AKVCItZWClEsoUIhW0RF6OvCkREQhEREIRERCEREQhEREIRFLQTsHforlg3rPdbuWpd31G2H7hx3DP/ABzMKy0dom6vz+y3q7XHBo79p4Nk74VDGX16N6qBt5u33WoKgm+1VNYTsBXLXmla1xLey3cNvM7eWA4L0TRXw5a2UP7dQfMRl/Fuzni7ihKKDYC5NlQ6UdGv23LVpWdeoOow+g8TAVhcaUtKGFSoAd0yfASVcUZTtsfWrTpjuA7vsFbJ3rfZoeoe24DlifYeaqK3xPRGFFhdxPVHufRehxaNp7vpVJlG71n6FZVS2W6OoMzk8z9oVdU05d1OyQ0cB7mfbuVRe7eft2IqUWcMY3AAeAWsa9VxlznE8z91WiIr9cUiIiEIiIhCIiIQiIge2+pt1oOGP55YoAkx6kDzJAU/bXYqxFvvf3O1UuqgDZjdN99PqVl1S4nQjssPj3qvr/rKvVpQwbzi7uAmO8zyV5Z09HUOvca1Z30tBDBzc7VLv7Rqnc4GV63A69A3dXy9KsiVnutdwXkBTMtOnoOkDrVXOcfDxzP/AGVrV+KLwgNoU202jD6iOXZaOWrC9PlJ6Gkbr2Ktue46E6brK1mKpzKxpWdGl/TYB3Y+Jk+ap7i+u7jCvVc7hOH/ABEN8ldUZgrSLP0U5laowyVwyBRyvUraKegZtU9K4ZKvlT1KDId6pROKTBsCU1qh+Y+KknsRUosgELETOJXvREWNayIiIQiIpJQhQoc4Darb5d3erRKUuWzTtycXYeqrfKTsVChSoW2AG9lFCIpUFERUqYSEoiKEyVERSphKVCIqU0JZVShQilKiIilLKyCIiwrCiKlzwFafISoLoWWnRc/HYrr5AFYc4lFSlW6ym1mWaKUUITSiIoUpSVKhQiaEkooRFKUlEREwSoiKlSAlJUqERMlUqlFKkJSiKEUwlWQJsrTpdypJuoWmXLcp27W4uxKKFClACzkqERFMJCURFSmhKSiIoTJZUqERSllERFKQlFSpUJkqlFChSlRFKhSlUqEVKZKqkVKKVEr0qF7KDC56jNyEMkmS2bkwTa97Xtvse5eifg7WxsdI+lnaxgLnOcwhoaBckndZV+u2YJE8wrTFYxQrlLTSTPbFExz5HXysYLuNgSbDsBPqXuqeD9ZEx0slLO1jRdz3MIaBvJTFzQYJE8x/6lWNUK9R0cs7xHDG97yCQxgu6w2myyP3LV/6HU+AqS9gwJA5lIsOiysfBquc0ObSVBa4XDgwkEHYQvHX4fNTuDJ4nxuIuGvFiRe1/iKZr2kwCPFQZXlRZSn4O1sjGyR0s7mPALXNYS0g7CDuXkr8Omp3Bs8UkbnC7RICCRsuFIe0mARPP8KUyvMiv0VHLO/k4Y3yPsTkYLusNpsvf9y2IfodT4CpL2NMEgcyEuJyCw6K7UwPic6ORrmPYbPa4WcD1hZP7lsQ/Q6nwFMXtGJIHeEmJyWHRZj7lsQ/Q6nwFWKzAauBhlmppmRttd72kNFyALntIHrQKtMmA4eIUEHcVjVKz9XhDIqWknzZhUtc97TbQtdbmkdB0WJlojtab9Ww/WtJmlbY1nUXGCDGOR7+eGOeyVanQd2bVl1TbrtcJIHaGJGWZGGYx3gASvIpUAorRUkzkoREQoKIpRNChbhxbYl5PiEbSeZUAxO3Zjqw9uYAfCXZaqnbLHJE7zZGua4dThY/KvnKORzXNe02c0hzXdIINwe8L6FwavFTTQVLdkrGutuJHOb6jcepchpqjD21RtwPMZfnBXVF2xc04qsNd5dUSPGtMwsPVI52X5GPHrXTsTpBPBNAdksb2HqzNIv8a8OBYUKeWueB+EVBkB6ixht4jJ3rI01U2QytH5p+R3bla7+sLSvrg1q/St2BscMAfUpqbYbBXMuKGhPlFVM8EGNjY9ehz3XcO0cmO9b3wuxPySinnBs8Nyxn9d/NYfUTf1KrAcKbTGrt+fqJJfU8N07L371pPHBiWtPRNOy80g72R/1/Etkxe6QB+XDwAnz90n9Olx91u/BMWw+hH/zwfy2rnXHA4Ctgv6AfzHrovBP8X0P+3g+YFkpIWO1c1pO8gFYaV0La7dUInF22MyeaZzNdgHJYvgf+LqL3iL5oXP8Aji/Cqb3k/PK6u1oAsAABsA2Lk/HH+FU3vLvnlZ9FO6S+1t+sfFJXEUvBe7ifwzSorXDbaGM9Qs+T1E5PCV0xYjgthnktFT09rOawGT3x3Of/ABEry0uLh2KVFFfzKeF1tzg5xd/DNH3LWu3Ouq9R7cQBPcCB7ynpjUYAfwrn/G/hnJVLKpo5tQyzv24wAb9rSzwldgWrcY2GeU4fLYXfDaVnwL5/4C74lzjiyH/lID02m16f9Ny320/1ti1xdBpB2yZwBG0RgI2rCXdFVIjtR7ruK1PjO1wqptvh/msW2L5leACbbz8qw6Hs+mq9JrRqFpiJnM7xGXFTdVdRsRmD+ea392Fy1VFhMMABfyU5sSGiwkF9SvDX8EK2FnKPjFrtaAxzXOLnGzQGt1JJsFexCVzMPwlzHFp5ObVpIP8AqDpC3fFKgNxika9xDXQnICeZyhc/KSNl7XA6yFU3o/1NT+R9V2lhdVqFjb6sFpY90QZ6hJIBBjGcMMNxWjy8Aq58ed0LM23Lmbynde3qutRrKF8RLXNsWkhwIIII0IIOoK6p5PinsrmvNyHK3zXPIcjm8217Xy9G2+u3VYPhjSuqMSkZStc59mh4YL84ABxJGwAFoJOlwtqy0tXtQGjrN+k+x2csRwla9zo2hpGqelLA8s19ensyEPBMHnIdhErnqL341TtildEDE5zbZnxPD4+sXGlxrfrXgXc0KvS0w+CJEwYnyJ/MwMlwVxSFKq6mHBwBiRMHlIB9txIxREULMteV6F1TikxPPTy0bjrA7Mz9iS5IHY4OPwguVLJ8HscloJ+XhDS4tcwtffKQbHWxHS0FVF9bmvQcwZ5jmPwq1Y/VdK+gXOABJ2DaVoXFpjXlE2JA/ly8uwHbaS7SPUGRha5W8ZNVNFLCYqdokY5hc3PmbmBFxd23Va/wbx2XD5jUQtY5zmFha++WxLT0Ea3aFV0NFVW0KrXRrGI7jPmsjqw1gRkvoJfPvCjEvKq2oqAbtc8iPdkbzWW7Q0HtJWfreMqrliki5OnbyjXMzsz525ha7bu26rSbjeFt6K0fUty59QYnARjht9vBY69YOgBfQXBT8X0P+3g+YFpHGfjdVTVULKeeSNroQ4tYbAnO8X7gFiMO4x6qCCGnbDTlsLGMaXZ8xDQACbO26LBcJ+EUmIysmlaxrmMyAR3ta5NzcnXnLHaaNqtujVe0FvW3HPLBTUrtLIBxXa+C07pKGklkcXPfDG57nbSS0XJWt8KMM8qxnDmEXZHGZZP2Y33F+ouyj4S1PDeMaqp4IqZkNOWxMaxpdnzENFgTZ21VDjJqOWNT5PTcoYxGDz9Ghxcbc7pJHhCxUtGXVOs+owDHWjEYTIHgh1emWgE7l2VeBsVKJDM1tPyztDIAzlDewsXbTsHcuVVfGZVSxyRcjA0SNc3O3PmbmBFxd1ri60drspBbo5pBaRa4I2EJbfQNZwPSO1TlgJnniEPvGjIT5ey+mnNBBBFwdCDsIXIOCWHGkx8Ux2RunDethic5h8Jaq/bVq/QU3dJ/csRNw1ldXR4lyMIljYWZRmyOFnC7ude9n/EFmstG3VFtVhAhzSMDt2epS1bik4tIOR8vwBd1XzNJtPaflW9+2vVegpv4/wC5aEXAnaNVt6JsK1rr9IM48p+6w3VdlSNU7/ZbpjH4uwj3uf8AmBY+txGoq3xuke98gs1htd224AAAubntWcnoWSYbhkk08cMLI5M736vJ5S+WNg5z3bdB3rA1PCVkQMeHxmIWINVJZ1W4HbYjSIdTddmq586MuLy6qdGOrrGXHLPz5BdvbaetLHR1EP61QNMAZiScz8siJ2nbsWyuxuppYwK+tkbcc2liyOrTcCxe8i8Q63HNodLrUsW4SyzNdDE1sFO46xRE5njfLIedIe3TqWEc65JJuSSS4m5JO0k9JVNxvC6ax0NRtutGs/eRlyGz14rjr/S9a6JGDGnHVaNUd8RJ4niqkVKm46lawSqqQiKEQhX0RFqKxlERQpASEr34BXNp6qCZ4aY2PHKBwuCw81+h280k9oC76MNp9vIQeBn0L5yXdOL/ABPynD4HE3fFeGTfePRpPWW5D61R6conVbWbswPqPfxWzauxLSuZ4vgl8adRNbzJZ2kAaARy2kdbqDXO8K7N7G0/oIfA36FgqnBs2MwVtuaynk/eNdkv4Zj4VspeMwZ+UQSB1CwPyhVl/dmq2kAcmY88j6LPSp6pdzXEm4H/AOd8hyjKKi+Xo5L/AFbfu9F2X2Np/QQ+Bv0LCHBR7MitsMvkxF+nlc2S/gNl6OGuKeSUFRMDZ5bkj355OaCOy5d8FZLyu66qUWMOJaB/cc/ZLTaKYcTvPgtN4MU0dfjNXVZGeT01xG0NHJkn73GbWsQQ17u0hdF9jaf0EPgb9C1riwwvyfD2PIs+oJkP7PmxjsytB+EVnX4m0VrKO/OdC+Ujse1rf6+5Y797qlw5lLssEDk0YnxlTREMBdmcfFcu42MIbBVR1EbQ2OdmoaLNEkdgdmgu0s7iumYNh8BpqYmGEkxRXJY2/mDqWN4x8L8pw+Wwu+C0zexl848Bd67LReBnCqukrKSlfO4wF2Qx5IwMrWGwuGg9A6VuBlS8sGlhxp60zOIAkRAOzDHcsMilWMjtR64rrPsbT+gh8DfoWD4aUELcOq3NhiDhGbFrGgjUbCAtnXKMLx6sqMX8glnzUxnlvGWR2LYi97W3y3t97HStGwo1KjjUDsGdYyTiBjhAO5Z6zw0QduHiszwQ4Cxxxxz1w5WfKMsMnOihbtDMp0LtdegE6DpO9xxtaMrWgNGwAADuVa4nwt4aVr6uZkMz4oopHsYyM5Scri3M47STa9tgT0qVxpOqS52W+YHADH8GKRz2WzBA+55lbrwnoovZbBzyUf3x1WJOa3n5Y2lubTW1za+9bZ7G0/oIfA36Fyfgzwknra/DI6ghz4HzZZbAOcHxnRwAtcZNv+V2NGkaVS3FKk44huw4dt8eUKbd7X6zhv8AYLg3BSNrsXhY5rS0zPBaQC21naWXbvYyn9BD4G/QsPR8DKCGZtTHC4TNcXNdykhGY3ubF1ukrY0aUvmXNRrqUgBsYwNp3E71FtRNNpDozlfNmLC1ROBsEj7AbPPKhTjH4TUe+SfPKhdyzIKkceseaoVKlFqrelQilUqUsqVv/FFimSomo3HmzNzs/bj2gdZab/AWgL2YLiDqWpgqW7YntcQNpbsc31tJHrWC6odPRdT3jDnmPMeCGP1XBy+i7C9+nf2/4C1KXGwMdjo783yZzCP/AGOPK/MjHevL7aNB6Or8Ef8A2Lnb8fvinslZ2XlxJl0z8kCG5dtr5BbbtXP2Oi60v6VsdUgczkt2rcNw1TtC75bpXNuMqV1VVUOExnV7g+S3QXksafgtDz2ELIe2jQejq/BH/wBi07CuFUAxafE6hkzgc/IMYGlzbgMZe7gBZgI0vq4qdH2FxRqGq5hloOqN7jgFFesxzQ0EYnHl+YLssELY2NjYLNYA1oGwACwHcFjn4DCaxuIky8u1uQDN97y2Itlt+sT2rW3caNBY2jqr9F2x2v8AvFzv7ssTt+FzX+Db5qx2uiLx2tjqbMZxBzyB7+5TVuqTY28ti749oILSLgixB2EFcUwHDfJMejpT+bmcG32lha5zT62lpW4QcaNFkbnZU57DPlbHlzW1t982XWs4pwro5cUpMSjZOGxC07XNYHOsHBhbZ5BPPsbkeaFsaOtbqiKjHsMPY4d8GPGSOcJLipTdqkOGBHhOP37l2RcGhxAUuNOqHeayqlzncx0j2vPqa4n1Lf8A20qD0dX4I/71ybFKgTVE87b5ZJJHtB22e8uF+uxWxoexq0+kbWaQHCPWVjvKzSG6hkgyvpBjgQCCCDqCNQQekLn/AAl4t21NQ+pgm5PlXF0kb25m5jq5zSCNp1seknXoWtcEOMCSjY2mnYZYG6MINpox7lt9HN3A2tvtYLdo+MnDSLl8rT7kxuv8Vx8ar22V/Y1SaIJ2SBII4jGO/blKzGtQrth8ciYj84LB0vBePDa/CGMe6SWV9SZJCMosyMWDW30HPO867V05coxvh1STV2H1LGzclSGcvJa0OdyjQ0ZBm/V6bLOe2nh/o6vwR/3p7yzvbgU3OaS7VM5Z67iPKFFGtRZrAEATh4BeHBOMGpqK6OjdDAGPkcwubnzWGbUXda/NXSV88YFirKfEI6x4eY2Pe8taAX2Oa1gSBfnDpXTfbToPR1fgZ/esulNFP6Rv6anhq4xvk+0JbW6BaekdjO3cuS4x+E1Hvknzyit10ofLLIL2e97hfbZziRfvRdWMAFUOdiSoRFC1lukopRUpoSqURUqUqIiKUpKIpUJoUSiIilKSiKFKlKipUqEKERFCaFEoiKVKVQiuwQufsGm/6l74KZrNbZne62BV17pS3tBFQy76Rn/jv7pVvozQd3pEzSEM2vdg3u2uPLDeQvJT0jnc4mw3n7XRZFzidTqUXKVfiG8e6WQ0boB8yJPkOC762+EdHU6YbVBe7aS5zfANIAG6ZPErFqERdmAvNkUKETJSUUqEQlRERNChQpRFKVFClUqVCKVCKUpKKERSoJREuvXDQ35zzYdAGt1huLmlbs16rgB+ZDM9y2bSyr3lToqDC53DIcScgOZE5DFeZjCTZo1+Je2KhA1fqdw/5IXoY0N5rRYdV7q4uRvviCrU6lv1Rv8AmPs3ux4jJeg6K+EKFGKl4Q930/IPd3eA3/ac1Sdw7lKIudJkyV2QAAgZIiIhSsUqVKL1BeFyoREUgJVKpRSmSkoiIhLKhQiKVClQihSoUqFUATs+JXI6d7vNb4tPWLoc4NEuMDjghrS4hrQSTkACSeAAxJVlXqemc/Z5u87F7IqNrdvOd8Q9YV862v0bAubv/iJjOpbDWP1HLuGZ9Oa7TRfwfVqRUvTqt+gdo8ziG8hLv4nKiKFjNWjX3R07grpKhFydavUrv16jiTx/MBwGC9AtrWja0xSotDW7h6naTxMnipUIixLYRERCEREQhYhSqxA49HeqxSu3hen6w3rwlWEXpFJvd3KsUreso6VqiF40XvELR+SFWBbYlNYblGqscI3HoPcrgpnbu8r3KC8JTXITNpl2S8goz0kfKrgox0kq4ZFSXFYzXcdqfoN6jydg6O8qrmDY0dyqjhJ1OjfdfUrzQB5unX0qsvNL06EtnWduB9TkPM8Fe6M+HLm8h/Yp/URn/FuZ54N4nJQGe606ulVlx2bBu6EULlrq+rXJ65w2AZD78zK9C0doe1sB+y3rbXHFx79g4CBvkqVCItRWiIiIQiIiEIiIhCIiIQraJftUZl37rqk3bPL8heLM0fcP+WOeHln5KUJVBciwm8nshbTdGAdt3gPv9lUXqguKhQl6V7tqf9NSZkPHFFCqH2CuiEDztT7n61irXNKgJqHu2nu++C2LWwuLx2rRbMZnJo5n2z4K1Gwu2K+yNrei53qq/wDhFQ3Wla1Xqs6reGZ5n2HfK7LR3w7bW0Pq9d/EdUcm+5x3QjiTqVKhFVALokREUoRERCEREQhEREIRERCEREQhWERF1C88REUsYSm1mtGs4wEgpvqODGAknYFQq2xE7f8AKuBttnfsVZKra+lD2aI7z7D7+CvbP4eB69yf7QfU/bxKpFhoNApRFUOcXHWcZK6anTbTaGMAAGQGAClQiKE6IiIQiIiEIiIhCIiIQiIiEIiIhCIiIQrCIi6heeIvVLsb2IirtJ9lnM+ivdAf1KvIeqpUIiqF0yIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhC//Z" class="img-fluid rounded-start" alt="..." id='watchers'/>
    </div>
    <div class="col-md-6">
      <div class="card-body" id='end'>
        <h5 class="card-title">What To Watch</h5>
        <span class="card-text"><small class="text-body-secondary">"Shogun,"Sandler in'Spiceman'and More</small></span>
      </div>
    </div>
  </div>
</div>



<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="https://m.media-amazon.com/images/M/MV5BOTMzMjg1MDMtYTdmNC00NDE5LWE5OTctNzA1MWNjZmUxNzRkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body" id='end'>
        <h5 class="card-title">Boys Kills The World</h5>
        <p class="card-text"><small class="text-body-secondary">Watch The Trailer</small></p>
      </div>
    </div>
  </div>
</div>


<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-3 p-1">
      <img src="https://m.media-amazon.com/images/M/MV5BY2JmNzVhOGEtOGFlYi00NzgwLTg0M2QtYzU3MmE1MWU0ZjllXkEyXkFqcGdeQXVyMTk2ODc0MjY@._V1_FMjpg_UX1000_.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">What Are The 2024 Oscars Best Picture Nominees</h5>
        <p class="card-text"><small class="text-body-secondary">From 'Openheimer' to 'Pastlives' and More</small></p>
      </div>
    </div>
  </div>
</div>

    </div>


    </div>
    </div>


<div className='container'>
  <div className='row'>
    <div className='text-warning'>
<h1 className='text-center p-1'>Featured Today</h1></div>
<div className='col-sm-8'>

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">

    <div class="carousel-item active">
    <img src="https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/090623092649-6482f059705f5imdb.jpg" class="w-49 " alt="..." width={650} height={300} id='picss'/>
    <img src="https://wallpapers.com/images/featured/rashmika-jsz8vg8sbn6nug7l.jpg" class=" w-49"  alt="..." width={200} height={300}/>
    <div className='text-success  m-2 text-center'>
   
        <h5>Indian Origin Actors Making A Splash High</h5>
        </div>
      
    </div>
    
    <div class="carousel-item">
    <img src="https://m.media-amazon.com/images/M/MV5BZDM3YTg4MGUtZmUxNi00YmEyLTllNTctNjYyNjZlZGViNmFhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX140_CR0,0,140,209_AL_.jpg" class="w-49 " alt="..." width={210} height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BMDE0M2YyM2UtODRmNC00YjAyLWIwMjktOTAwMDBiYjBhMGZmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY209_CR0,0,140,209_AL_.jpg" class=" w-49"  alt="..." width={210}height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BZTkyODExOTctY2E3My00M2U5LWI2OGItNzRlZDk1OWJmOWQ3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg" class="w-49 " alt="..." width={215} height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BNDkzMGI0MGQtYWM0Ni00NTY1LTk3MTAtZGZkMWY3NWNhOGFkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UY209_CR2,0,140,209_AL_.jpg" class="w-49 " alt="..." width={215} height={300}/>
    <div className='text-success m-2 text-center'>
  
   <h5>What To Watch In Febrauary</h5></div>
    </div>
    <div class="carousel-item">
    <img src="https://m.media-amazon.com/images/M/MV5BZjVhMjVjZDctYTk2Yy00MDUyLTg2OGUtNWExMGE4MmYyNjRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR13,0,140,209_AL_.jpg" class="w-49 " alt="..." width={210} height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BMDE0M2YyM2UtODRmNC00YjAyLWIwMjktOTAwMDBiYjBhMGZmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY209_CR0,0,140,209_AL_.jpg" class=" w-49"  alt="..." width={210}height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BZGIxOTAyYzMtZGFlZi00OWFlLWE0YTItYTNjMTVkYTU0YjE0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY209_CR0,0,140,209_AL_.jpg" class="w-49 " alt="..." width={215} height={300}/>
    <img src="https://m.media-amazon.com/images/M/MV5BMDc1ZWE0ZjQtMTEwMC00ZmI1LWE5OWItNjE2NGM3ZjdjZGZlXkEyXkFqcGdeQXVyODE4NzU4OTY@._V1_UY209_CR0,0,140,209_AL_.jpg" class="w-49 " alt="..." width={215} height={300}/>
    <div className='text-success  m-2 text-center'>
  
   <h5>The Latest New Posters</h5></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

<div className='col-sm-4'>
<img src='https://m.media-amazon.com/images/I/418AHNTXcgL.jpg' width={400} height={300} id='last'/>

</div>

  </div>
</div>
</div>
</>
  )
}

export default Header