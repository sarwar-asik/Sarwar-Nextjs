import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  style:['italic']
})

const Hero = () => {
  return (
      <div className={`hero my-5 `}>
        <div className="lg:flex w-full gap-5 ">
          <img
            src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/315601513_110461278551365_7974049018432441194_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFv4zbuxHoJz_Df9JG7FtUzeiTTcXKmdH96JNNxcqZ0f8UR-6Mf-Z9g7-il50UK4dvu9E67Oznz5u0N3EvHAZjH&_nc_ohc=bnzzIT6I_FQAX8rc5sS&_nc_ht=scontent.fdac31-1.fna&oh=00_AfBJHpLlB5JsqT_n7LgdEfbdb2ewtXwtFcNimhm0yK9EIg&oe=63AB3250"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sarwar Hossain</h1>
            <p className="py-6">
            Front-end Developer || MERN Stack 
            </p>
            <p className={`my-3 ${roboto.className}`}>
            I am a front-end developer . I have created 30 + project with my
              frontend skills . I am ready to make your business , personal and
              official Projects .
            </p>
            <a href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing" 
            target="_blank" className="border-4 p-2 bg-primary text-lime-100 mt-5">Resume</a>
          </div>
        </div>
      </div>
 
  );
};

export default Hero;
