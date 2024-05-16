import "./../src/App.css";
function App() {
  let data=[{
    plan:"Free",
    price:"$0",
    list_data:[
      {
      visible:true,
      user:"signle user",
      bold:false
    },
    {
      visible:true,
      user:"5GB Storage",
      bold:false
    },
    {
      visible:true,
      user:"Unlimited public projects",
      bold:false
    },
    {
      visible:true,
      user:"Community Access",
      bold:false
    },
    {
      visible:false,
      user:"Unlimeted private projects",
      bold:false
    },
    {
      visible:false,
      user:"Dedication phone support",
      bold:false
    },
    {
      visible:false,
      user:"Free subdomine",
      bold:false
    },
    {
      visible:false,
      user:"Monthly status report",
      bold:false
    }
  ]
  },
  {
    plan:"Plus",
    price:"$9",
    list_data:[
      {
      visible:true,
      user:"5 user",
      bold:true
    },
    {
      visible:true,
      user:"50GB Storage",
      bold:false
    },
    {
      visible:true,
      user:"Unlimited public projects",
      bold:false
    },
    {
      visible:true,
      user:"Community Access",
      bold:false
    },
    {
      visible:true,
      user:"Unlimeted private projects",
      bold:false
    },
    {
      visible:true,
      user:"Dedication phone support",
      bold:false
    },
    {
      visible:true,
      user:"Free subdomine",
      bold:false
    },
    {
      visible:false,
      user:"Monthly status report",
      bold:false
    }
  ]
  },
  {
    plan:"Pro",
    price:"$49",
    list_data:[
      {
      visible:true,
      user:"Unlimited User",
      bold:true
    },
    {
      visible:true,
      user:"150GB Storage",
      bold:false
    },
    {
      visible:true,
      user:"Unlimited public projects",
      bold:false
    },
    {
      visible:true,
      user:"Community Access",
      bold:false
    },
    {
      visible:true,
      user:"Unlimeted private projects",
      bold:false
    },
    {
      visible:true,
      user:"Dedication phone support",
      bold:false
    },
    {
      visible:true,
      user:"Unlimited Free subdomine",
      bold:true
    },
    {
      visible:true,
      user:"Monthly status report",
      bold:false
    }
  ]
  }
   
  ]
 
  return (
    <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {
      data.map((e,i)=>{
        return<div className="col-lg-4" key={i}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{e.plan}</h5>
            <h6 className="card-price text-center">{e.price}<span className="period">/month</span></h6>
            <hr/>
            {
              e.list_data.map((list,i)=>{
                return <ul className="fa-ul" key={i}>
                <li className={list.visible ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={
                        list.visible
                          ? "fa-solid fa-check"
                          : "fas fa-times"
                      }
                    ></i>
                  </span>
                  {list.bold ? <strong>{list.user}</strong> : list.user}
                </li>
              </ul>
              })
            }
           
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      })
      }
    </div>
  </div>
</section>
    </>
  )
}
export default App
