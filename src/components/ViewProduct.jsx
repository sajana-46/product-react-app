import React from 'react'
import NavigationBar from './NavigationBar'
import { useState } from 'react'

const ViewProduct = () => {


  const[data,changeData]=useState(
    [
      {"name":"Foundation","price":"210","avatar":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRrLZrcA_cBktbvAq-PLXUJ7gtaaopgCOasqb2sHltYlEruAJDbXo6ddvSfNpBsPzenfRUmrLCWCN4JP68CqisQsvS6zcGEDe1clikI92ZOwQt2ovVHEZ6irs"},
      {"name":"Eyeliner","price":"120","avatar":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVIT0hJSktLi4uFyAzOT8sQygtLysBCgoKDg0OFxAPFy0dHR0rLSstKystLS0rKy0tLS0tLS0uKy0rLSstKy4rLS0rMC0tLS0tKysrLS0tKystLSstLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBQQGBwj/xABJEAACAgIAAwMGCgYHBgcAAAABAgADBBEFEiEGEzEHIkFRcZEjMlJhgZKhscHCFDVTY3LRJCUzNEKjskNiZHOC8BUmdKKktOH/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMBEBAQABAwEFBwQBBQAAAAAAAAECAxExBBIhMkFxEyIjUWGBkRQzsfChQmLB0fH/2gAMAwEAAhEDEQA/APFz0n0y4EgSBIEgSBIEgSBIFwJAkCQJAqBIEgSBIEgSBIFQJAkCQJAuBIEgSBIFyCSiQJAkCQJAkgkCSiQJAkCSCSjY4Bws5CZLclbJR+jtZbbkJjpQrMy7YsQCD7Qeg1rfXDPLbZp1dTs7d/O/lvu0cvs21Isa3HHwd9FL0VZVL20mwBUNnn7VXbZBOvR4A9MJnv5tWOv2uL5c7fLn8Jj9lefPxabNV4uT+kILMXIryOW2ihndC22AbmUbB9Z14dL7T3bfNb1G2ncpzNue7msqns7lHkDLVUWx/wBJs765Khj0bAD3En4PexoHqd+Ey7eLbdfCb7Xfv29fRMjs9lViw2IoFd9GOT3iMGe0c1ZUg6ZSNHYiZy8JNbC7bXy3/Dor7I5jMy6oQrkvh/CZNVYbKUKe6XmI5mPMNAePX1R7TFL1OH14348mJbWyMyOCrozI6nxVgdEH5wQZm3S7zeAhUgXAkC4EkElEgSBcCSCQJAkokDn4xc2PTj2gK36RbkVgHfm90KiT9Pej3TTqavZu0cPU9XdPLs4x3dxrEw8knrkptl10VuUHofV/KNPU7XdTperurl2cp3kzc7kgSQSUVA2OCpkW4vEcTHpFq5CYnfWGxKu4Fd3MnVyASzHWt79Uwysllt4atS4Y5YZZXbbf77x6mwZNt/eNRSauN/8AhGVYX86uj9HU2d1yEg3brQM2vANNXdJtv4d3J7mOO2/fh2p6792/0Pu4txLvcS5eG6FORfdQWzFZQtmK3Mj7Oq1COHG+UADXpJkmOHf7zGaejtlO3zPl9f8APycmPncVrLX2YTvYuNZi5t65K492SlTAraCp5uZNhedeYNza69JlZhxuzyw0L7sz8953b7b/APf1DkZHEFGa2Vw7vau8qySluc1jY1mOh/xc5e3Q84qPQd9AREmHdtl/gmOlezMc9rxxzv8Aw5W7W0NT31uPXdlHjFvEFxzZagpPdV8j84GmHMpHKfH5pfZ3fbfu2Zzp8pltLtOztv8AN5LKva22y59F7bLLXIGhzuxZtD2kzbJs65JJJPIqVUgXAkCQJAuBIEkF6gSUSQSBNSiagcva8f0PhXz28Rb7aB+E49bxvE6396/b+Gq36q4V7v8AKP8AKXR8R0H732ck6ntpAkomoFSDR4Nxu/DNjY/dhrV5GZ6w7AaI6H6T0OwemwdCTLCZcteppY6m3a8nXb2rzHGmas6V0q+D646Pjihlq6+YCgHQenrMfZ4sJ0+E/vPfv3rbtbmFnYmlha9r3VtSDVd3lSVlWXfxeWtQANa1Hs8U/Taf17v/AENHarKrRa0GMqozFOXGrQojZC3mpeXWqy6jzfV09Wl05VvT4W73f8/Tb8lL2lyxTk0c693l2XW27Xzg9v8AaFT6N/T82pexjvL8l9hh2pltx/w5MnidtiurlSHILdOpIbm8fb/31O7MZGWOnjjd44pk2JAkC4FwJIJKLkEgXqUSQTUovUCpBcCQOPtl/deED5s9v88D8s5NXx14fWfvZfb+I1T+quFfx6/yLP5S6Xih0P70+7l1Op7ialEgSQVqBIElFSCSiQKgSBIFQCkElFyCQL1AkovUgkovUgmoF6gTUCagZ/bT+w4OP3Ga3vzbh+Wcmr468PqrvrZf3yaw/VPCj6rgP/j3xpeKJ0d+Pj/fInU7Huq1IJqBUompBUompBUCQKgSUVAkCQCgSQXKL1AmpBeoF6gXqBNSC9QiagTUCagZvbroOEr6sCxvrZ2SZx5+KvB17vq5+rZxxvg3Dz6rq/8ARaPxmWn4odL+/iRqdT3k1ArUomoVWoFEQK1AmoFSipBIFSiQJG4KBcC9QLAkFgQL1IiagXqBeoE1AvUCagTUDK8oP9tw0erhWOfrXXt+acWXir5/V/cy9b/Lbwv1JifNbT9rsPxmWHMXpr8bH1J1Ot76tQJqBWoFagTUKrUorUCtSitQKgVIJKKjYGBAICQWBAvUgsCEXqBeoF6gXywL5YF8sC+WBOWBh+UE/wBJwB6uDcM+2nm/NOLLmvns7vllfq28E/1Fj/Nfi/8A2gPxmWHMNG7auPrE5Z1voVcsCuWBWoFagVqBRECtQK1KqiIA6lFQKkEgMAgEBIi9QLAgEBAsLAILAICBYECBYF6gXqBRGgT6usDA8pA5eI11/suH8Mq92HV/OcL5ttcNG+Ap/u2UN7sxTMsfJdP9zH1hup2Po0IgVqBREASsASsCiIAkQKIgVqFURKBIgVKKgNAmKCAgWBAILAMCAQECwIBBYFhYBcsC+WQTlgKy+lVp9Vbn3KYrHO7Y1geVH9eZi/I/Rq/q41Q/CcT52Nngp/qByf8ACrN9W/f4TKEu2crrKzsfSK5YAlYFFYAlYFEQBIgCVgARAoiAJECtQoSJRUocBMUGBAILAICAYWAQWAQWQEFhBBIBBIF8sgvlgLyqeat0+WpT6W6fjJlxWrXu2nl6V5Tymvzcd4mf+LdfqgL+E5Hgxs8E69n8kf8AD5f2M5l8mN5aut9fX1nW+kiikqhKQBKwBKwoSsoEiAJEACsASIAkQBIgCRAmpVPAkQQEAwIBhYBBZAYWEGEkBhYBBYBBIRfJAvkgXUm7ccfLzMKv6+TWv4zHPw1o6m7aWT5524t5+L8Sb15+Z9lzCcrxY9R2XXm4Jkr68fNH+uWcMLy1MXzqqm+VWh96gzrnD6LC74z0MKQyCVhQlYAFYAlZQBWFAVlAEQBIgARAAiAJECtQOkCAYEAwsBirIg1WQGFgMCQggsAwkAgkAgkC+SA/h1PNmYC+vPwz9S1bPyTXqX3a5esvwr9nyPtBZzZ2W/ysrJb32sZzvIe37EDfC7F9aZQ9/NLOGF5d/AxzYeIfXjUe/kE6cb7se/o3fTx9I7CkybQlIAFYAlYAFYUtlgAyyhbLKoCIAEQAIgARArUDqAgMVYDFWRDFWQMVYQwLANUgMCQDCQCCQCCQi+SA/hI1xLhf/q7HPsTEvb7wJq1fC4+uu2nPV8Qy35rXb5TM3vO5oeW+i+T0bwdetrh9pljC8uzsoebh+If3XL9ViPwnRh4Y93prvpYtQpM28JSADJAWUgAywFssBbLClssoWywpZEoAiADCAOoHYogNVZEMVZA1VhDFWA1UgMVIBhIQYSAYSQEEgXyQD4cQM/HJ/wBnicTyPqY/Jv8AzZq1eHB1993GPhL/ABppec+keTf+6D/mWffLGGTt7Ep/V9S/IsyE91z/AM5v0/C9rpL8KfdtlJm6QlJQspABkhS2SAplgLZYC2WFKZZQphClsJQBEAdQO5VkQ1VkDVWENVYDVSA1VhDFSAxUkBhINxhIQQSAXJA42PLfmWfsOAcVb6XalR/pM06vk83r734z1fD3+MZqcT6N5OD/AEUf82z75YwyaXYjrRlJ+y4hlJ9Hmt+abtPh6/RX4f3egKTY6wFIXcDJAWyShbLAUywpTLAUywFMsKUyyhTCFLYSgdQO9VmKHKsIaqwHKsBqrCGqkgaqwbmKkIYEgGEkBhIFhIGBxbLWs8ZB5+azg9GNVpGKc732M3M+uVBpR1YgHoJp1OXldbfiSfR8bZSWOte8TW5XuewWWUoI7m90R3LPUqWAHx1yhuY/QJYxybnYK1XbifIdr+nNYuwVOnHpB6g+b4GbdPivT6G+7Y9UUmx3AZJQDJAUywpbJAUyyhLrCkssBTrAUwhSWWUKYSqHlgaKCYsTkWA5FgOVYQ5VkDVWENVIDVSQMCQCCwDCQLCQPJ9sWI4RxFtnz+MVV9T4ImKg5R82+Y+0mc+fieN1N31cnxwnqfbMGl9B8mdvwd6+qxT7x/8AkyjHJt9lmI4xxir/AAsuNdr/AHuUbP8A75s0+a7+gvfY9gVm16QCsBbJAWyyhLLAU6wpLLKEusKS6wEusBLCFKYSgNSq0kExYnosByLCHosgciwhyrAaqyBirAYFgGFhBBYBBZB4btrZ/UVh/acdzR9Qsn5Jz5eKvE1rvqZerzOBg15PD6sqynFa0WX4nNZRxFl7qmurk5Rh9Fbz22bPHproDMWp0+Smg2DL0R8GK7D7NNv7pYVtcDGu0eYP2nD1bXrINA/AzZh4nZ0N9/7PcFZueqArABlgKZYCmWUJdYCXWFJdZQh1hSHWAlxAS4hQalGmgkQ9FhD0WQPRYQ9FgOVZA1VgMVYQwLIDCwiwIBBYHzjtq39QYn73inE7fffafxnPea8PPvzvrXJ2OptvwbLMauql2ttqsYYivVb3dFYHKRapDAbZuYEbfmHiZiwX5J8aym7idF9b12111K6MjcyOOfofk+09PTLCtHAOu0qfvOHN9h3+WZ4eJ1dFfifl70ibnqgKyqBlgKZYUplgJdZQh1hSXWAh1lCHWFIcQEMIUGoGoghD0WEdCCQPRYQ9FkDlWA1VhDFWQGBCDCwCCwCHr9UD5R20t/8AL3At+Ngyrz/1OT+ac15eDbvbTODcM7nHQLZXbZitdbjW24lYsxbrqkLcmsxVfpykcyto/SJEB5M+JXZOXxC41FmtTEU10Oaa66lDItYHXzQihdnqAPHrEHYDrtHwxvl41qH5/g7/AMdTZj4o6OkvxJ/fJ9GKzc9cJEBbLClssoUywpLrAQ6yhDrCkOJRzuIUhxAQ4gBqFaqCGJ6CQdCLCOhBIHIsByiA1VkQwCEMVYBAQCAgKzH5arW+TVY3uUmGOXFfJu3h5eEdna/Vw/n1/EEM5nhQPZRaaMShMmu+kG/KObS3B3yRnVFVFam0jacvXovhzcw6mQX5OEqx8ziCC3nRaaVR76DS1mz1PIVcqRs+6IVoZbcvHOCt62sT3gj802TxRu6a/Ej6Y5ABZiAo6kkgAD5zNz2LZOXl+MdvOG4+x336RYN+ZjDvev8AF8Ue+YXOOfPq9PHjv9HjuL+U+7lBopWjn86vnHesUDaJJOgPA9AD6JhdSuXPrM74e5v9iu2i55am4JXeGbu9MAbVA38X0HW/Dp0Ph6csM9+6ujp+p7d7OXL1jCbXY5cq5KhzWula/KsdUHvMbpcpObswc7tXgVfGyFbw/s0ewaPp2BrUx7eMab1WlPMq7tPhc3LXd+kP8jGre9j7OUajtxf1OnvtLv6ATiV9pHd4VyIfF8qyvG0P4RzN9ksyt8mU1M8uML9+52uJm3OewQpDiAvUDWrEI6EEgfWIR0IJA9BAcohDFEiGKIDAIFgQi9QM7tNZycOz3HiuFlEe3um1JeGGpdsLfo+YeVHzaODUj/Z8Ko+glR/Kc7xI2sDtD2ZRUqaq1MfKSvMvp5LXrqzg7L1CNtNAN5q+aQ69DoagvgjYKcdz24der4lmJjuhFr8iM+uZFYupHLstyk9CNa2OiDA7c5L038PyKiFspa1621sB1KEHR8fYZkuFsu8eT4rxrIyjvLybr/TyM3wYPzINKPoElu/LLLPLLxXdnd+B8VQPb1k3Y7izW5irc3N8FUNfJIQbHv2fphF8Mz2xr676tCyshkLDYDevUS7LjdrLPJ6Vu0fGc7YpbKdSdaw6jWq/NzVjYHtMz7WVdPtdbU4t+x2N2J4tcS9ipSW8XyLg1h9vLzN75ZhlVx6TUy77Py18XyYr45OU778VprCdf4m3v3TKaXzrdj0M/wBWX4e1pxkqRa61VEUBQqgAaA0Jtk2d+OMxm0A4lZOdxKOdxCudxAXqBrViRHQghHSggPQSB6iA1RIxNUQGAQCEIKAnMzKqE577aqU+XbYta+8mEuUx5rxfa3tnh24eXi4zWZFl2PdUHrqbuV2h6l20CP4dzDLKWbOXV6jC43GXfd4/yl5HfZmPTTu1qsKioJWC7bAPoE0vNjAwux3EruqYdyg+m4Ljj2/CEdJGc08r5PT9kuzWXiXXG6teVq1VWSxHBIbqNA7+yZSVctDUnkR5RUIrxiwK6awecCPEL6/ZFa5LOY+fj3zBF6gdCVcyeHxOYuR4hNbB9+x7pVIoG2UAhSWUBj0UHfifmkR+kuH1MmPjo3xkopRumvOCAHp7Z1Th7unNsZPoNhMmZDiFIcQOZxKRz2CFc7iVXO4gBA1a5EdFcI6UEgeggPQQhokQ1YGVk9qMGtinfi60HRqxVfKsB9RFYOvp1MblI05a+njzXI/aDNs/unDbgCdd5nWJjaHr5NkkfSJjdT5NV6nK+HH8uS3C4xkf22bTiodgphoVb6xHMPoeYXOtVy1subt6OensJj83eX235FnpsYjmb2luZvtmO7D2Evfld2tj9ncOvwx0bYIPe81uwRojTEjw+aRnNLCeTRprVBy1qqL8lFCL7hDZJJwIiFZTDqfaZtbYm/R6D4j1wM/L4Hh3bNuLjuT4t3Sq5/6l0ftk2jXdLC8xjZfk/wCHv8QX0H91cWH094Gk7Mar0uF47mavk2C2brzWVOo0+MHPKRoqdOAw90nZa/0n+56DgPYfDxrVta02kBPg+5FVbMp2CdlieujrfXQ3uZ44xt0+lwl3t3e05gfAg+w7m3d27wtxKyIcQpDiBzWCUc9ghXO8o57IUuBrVyI6K4R01LvwBPs6yJbI668d/kke3p98xueM82F1MZ5npQfSR9HWYXUjC608oYEExupWF1qTmYtdyGu6uu2skE12ILEJHhtW6GY3K1ryyuXK60VF5UCoo8FQBVH0CYpJsswoTAEmBUAdwqbgZbnqfaZsbYqVVwLhFwLhFiAYtYek/fG9Xer74+nRmXarKZ0JcH1j7Ze2y7Zbpvw1933zLtxe3HPZW3qPu2JZYzmU+bksmSueyFKgexq4RWPEu30hROe6tcd18vJ1V4la+CL9PnffMLnlfNhdTK+Z46Dp9kxYKgUYAkwAMKowAJhQkwBJgCTCq3CpAzH8T7TNjZFSqvcCxCCgXCJAkCQJC7pAvcCmAPiAfaAZdyX5M/iVSqFKgAknepswtrbp5W8s+Ztr6BOJ5qQJAhgCYAtACFUYUJgBAEwoTCqlEhGY/ifafvmxtiQqQCgWISrhFiBIEgSBIWJCpCOLivxU9p+6bNNs0uazJsbn/9k="},
      {"name":"mascara","price":"215","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w9IIhnYKL77IMSiXi0t5mjJpGs1kH6IgW9gmH7nHng&s=10"},
      {"name":"Lipstick","price":"220","avatar":"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mby/mby56677/y/19.jpg"},
      {"name":"Mosturizer","price":"210","avatar":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCuwrmZHQ_6I7SCoHwMK8Cl4m5M8Ww8NxqENiOKDVBTXEgeVfjVxUYcQiKjy5s77hgzi6Hjz4tWk3ObHGaxOH26tKmetgAZe5qiztvqz0icbDqxszk4apvgQ"},
      {"name":"Sunscreen","price":"210","avatar":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6dS_fe82zPHvHHIXV3d36F6KakBVQu6D3kwCsJlibRMkEKNfcBxWR7-_TcB9UBnZTFk185HGFzvRvl56fwCxPV0El-LwYxc_DqPclQQLJ7OX9Er4gMVXTBXC2"},





      
    ]
  )

  return (
    <div>
        <NavigationBar/>
        <div className="container">
          <h2 className="text-center">View Products</h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row g-3">
                    {data.map(
                      (value,index) =>{
                        return(
                          <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src={value.avatar} class="card-img-top"style={{ height: "220px",}} alt="..."/>
                      <div class="card-body">
                        <p class="card-text"><strong>Name:</strong> {value.name}</p>
                        <p class="card-text"><strong>Price:</strong>{value.price}</p>
                        <span class="badge bg-success">Add to cart</span>
                      </div>
                </div>
            </div>

                        )

                      }
                    )}


                  
                    
                
                
        </div>
        </div>

    </div>
    </div>
    </div>
    
  )
}

export default ViewProduct