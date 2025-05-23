import ButtonComponent from "./button";

const ContactPage = async () =>  {
  //console.log("hey is this on the Server!!");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();

  console.log("posts", posts);

  return (
    <>
      <div>Contact Page</div>
      <ButtonComponent />
    </>
  );
};

export default ContactPage;
