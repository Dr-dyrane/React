export default function Login() {
  function login() {}
  return (
    <form className="w-full max-w-sm" id="customer" onSubmit={login}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label for="name">Name</label>
        </div>
        <div className="md:w-3/4">
          <input
            id="name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={""}
            onChange={(e) => {}}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label for="password">Password</label>
        </div>
        <div className="md:w-3/4">
          <input
            id="password"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            value={""}
            onChange={(e) => {}}
          />
        </div>
      </div>
    </form>
  );
}
