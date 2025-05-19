import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Navbar */}
      <nav className="nav justify-content-center pt-2 bg-dark">
        <div className="d-flex align-items-center gap-5">
          <a className="d-flex align-items-center text-light text-decoration-none me-4" href="#">
            <img src="https://placehold.co/30x30/purple/white?text=B" alt="Logo" className="me-2" />
            <span className="fw-bold">React + Bootstrap</span>
          </a>
          <a href="#" className="text-light text-decoration-none">Shop</a>
          <a href="#" className="text-light text-decoration-none">Contact</a>
        </div>
      </nav>
      <hr className="text-light" />
      {/* Content 1 */}
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="bg-light text-dark rounded-1 p-3">
              <div className="row ">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mb-2 mb-md-0">
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus. Blanditiis, illo reiciendis? Pariatur, dolorum. Ratione dolorem aut nesciunt repellendus ullam asperiores dolorum incidunt, non eos enim, obcaecati explicabo iusto?
                  </p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <p className="mb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fuga quos beatae doloribus maiores sapiente incidunt maxime in? Voluptate, repudiandae reprehenderit. Perferendis quisquam officia velit accusamus? Officiis tenetur repellat blanditiis?
                  </p>
                </div>
                <div className="col-12 d-flex justify-content-center mt-2">
                  <button className="btn btn-primary">Click Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2 - Cards */}
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center text-center">
          <div className="col d-flex">
            <div className="card h-100 w-100 shadow">
              <img src="https://placehold.co/300x300/000/fff?text=A" className="card-img-top" alt="A" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis modi itaque delectus, assumenda inventore quaerat architecto non iure at laboriosam voluptatum, illo voluptate sit vitae, fugiat quibusdam repellat sequi soluta.
                </p>
                <button className="btn btn-secondary mt-2">Click</button>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card h-100 w-100 shadow">
              <img src="https://placehold.co/300x300/000/fff?text=B" className="card-img-top" alt="B" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde aliquid eaque mollitia suscipit architecto saepe fugit omnis culpa corporis consequatur reiciendis, voluptates placeat totam, optio ex quos accusamus? Dolor?
                </p>
                <button className="btn btn-secondary mt-2">Click</button>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card h-100 w-100 shadow">
              <img src="https://placehold.co/300x300/000/fff?text=C" className="card-img-top" alt="C" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, velit laboriosam autem sed reprehenderit itaque unde officia, vero pariatur illum, modi fugiat voluptas? Perferendis earum dolore corporis quod, vitae quos.
                </p>
                <button className="btn btn-secondary mt-2">Click</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      {/* W komponencie poniżej */}
      <Form />
      <hr className="text-light" />
      <footer className="text-center py-3">
        This is an example React app made using Bootstrap by 
        <p className="fw-bold mb-0" style={{ color: "#e74c3c" }}>Nicola Kaleta</p>
      </footer>
    </div>
  );
}

function Form() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const name = data.get("name") || "";
    const surname = data.get("surname") || "";
    const email = data.get("email") || "";
    const delivery = data.get("deliverySpeed") || "Normal";
    const q1 = parseInt(data.get("item1") || "0", 10);
    const q2 = parseInt(data.get("item2") || "0", 10);
    const q3 = parseInt(data.get("item3") || "0", 10);
    const cost = q1 * 10 + q2 * 20 + q3 * 30;
    const finalCost = delivery === "Express" ? Math.round(cost * 1.3) : cost;
    alert(
      `${name} ${surname}\nEmail: ${email}\nDelivery Speed:${delivery}\n-----------------\n${finalCost} $`
    );
  };

  return (
    <div className="container my-4">
      <form ref={formRef} onSubmit={handleSubmit}>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
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
                <input type="number" className="form-control" name="item1" placeholder="Enter quantity" min="0" />
              </td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>20 $</td>
              <td>
                <input type="number" className="form-control" name="item2" placeholder="Enter quantity" min="0" />
              </td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>30 $</td>
              <td>
                <input type="number" className="form-control" name="item3" placeholder="Enter quantity" min="0" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname</label>
          <input type="text" className="form-control" id="surname" name="surname" placeholder="Enter surname" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Delivery Speed</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="deliverySpeed"
              id="normal"
              value="Normal"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="normal">Normal</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="deliverySpeed"
              id="express"
              value="Express"
            />
            <label className="form-check-label" htmlFor="express">Express</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}