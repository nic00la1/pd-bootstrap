import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <nav className="">
        <div className="">
          <a className="" href="#">
            <img src="https://placehold.co/30x30/purple/white?text=B" alt="Logo" className="" />
            <span className="">React + Bootstrap</span>
          </a>
          <a href="#" className="">Shop</a>
          <a href="#" className="">Contact</a>
        </div>
      </nav>
      <hr className="text-light" />
      {/* Content 1 */}
      <div className="">
        <div className="">
          
          <div className="">
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus. Blanditiis, illo reiciendis? Pariatur, dolorum. Ratione dolorem aut nesciunt repellendus ullam asperiores dolorum incidunt, non eos enim, obcaecati explicabo iusto?</p>
              <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fuga quos beatae doloribus maiores sapiente incidunt maxime in? Voluptate, repudiandae reprehenderit. Perferendis quisquam officia velit accusamus? Officiis tenetur repellat blanditiis?</p>
          </div>
          <div className="">
            <button className="">Click Me</button>
          </div>
        </div>
      </div>

      {/* Content 2 - Cards */}
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <img src="https://placehold.co/50x50/black/white?text=A" className="" alt="A" />
              <div className="">
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis modi itaque delectus, assumenda inventore quaerat architecto non iure at laboriosam voluptatum, illo voluptate sit vitae, fugiat quibusdam repellat sequi soluta.</p>
                <button className="">Click</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="https://placehold.co/50x50/black/white?text=B" className="" alt="B" />
              <div className="">
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde aliquid eaque mollitia suscipit architecto saepe fugit omnis culpa corporis consequatur reiciendis, voluptates placeat totam, optio ex quos accusamus? Dolor?</p>
                <button className="">Click</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="https://placehold.co/50x50/black/white?text=C" className="" alt="C" />
              <div className="">
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, velit laboriosam autem sed reprehenderit itaque unde officia, vero pariatur illum, modi fugiat voluptas? Perferendis earum dolore corporis quod, vitae quos.</p>
                <button className="">Click</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      { /* W komponencie poniżej */}
      <Form />
      <hr className="text-light" />
      <footer className="">
        This is an example React app made using Bootstrap by 
        <p className="">Nicola Kaleta</p>
      </footer>
    </div>
  );
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <table className="">
          <thead>
            <tr className="">
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>10 $</td>
              <td>
                <input type="number" className="" name="item1" placeholder="Enter quantity" />
              </td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>20 $</td>
              <td>
                <input type="number" className="" name="item2" placeholder="Enter quantity" />
              </td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>30 $</td>
              <td>
                <input type="number" className="" name="item3" placeholder="Enter quantity" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <label htmlFor="email" className="">Email</label>
          <input type="email" className="" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="">
          <label htmlFor="name" className="">Name</label>
          <input type="text" className="" id="name" name="name" placeholder="Enter name" />
        </div>
        <div className="">
          <label htmlFor="surname" className="">Surname</label>
          <input type="text" className="" id="surname" name="surname" placeholder="Enter surname" />
        </div>
        <div className="">
          <label className="">Delivery Speed</label>
          <div className="">
            <input
              className=""
              type="radio"
              name="deliverySpeed"
              id="normal"
              value="Normal"
              defaultChecked
            />
            <label className="" htmlFor="normal">Normal</label>
          </div>
          <br /> 
          <div className="">
            <input
              className=""
              type="radio"
              name="deliverySpeed"
              id="express"
              value="Express"
            />
            <label className="" htmlFor="express">Express</label>
          </div>
        </div>
        <button type="submit" className="">Submit</button>
      </form>
    </div>
  );
}