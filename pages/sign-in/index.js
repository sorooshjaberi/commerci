import Sign from "@/components/sign/sign";

const SignInPage = (props) => {
  return <Sign/>
};

export default SignInPage;
export async function getStaticProps(){
  return{
    props:{}
  }
}