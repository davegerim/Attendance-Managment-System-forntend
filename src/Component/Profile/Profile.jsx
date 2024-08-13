import Demo from "./Formsteper";

function Profile(){
return (
  <div class="h-full bg-gray-400 dark:bg-gray-900">
    <div class="mx-auto">
      <div class="flex justify-center px-6 py-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              "background-image":
                "url('https://img.freepik.com/free-photo/view-3d-young-school-student_23-2151103678.jpg?t=st=1723557900~exp=1723561500~hmac=a9979af16ab9d5a1761d138e02b3ced35697dffa734b6fbf48150afc5164f4d9&w=740')",
            }}
          ></div>

          <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
            <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">
              Create an Account!
            </h3>
				<Demo />
            
          </div>
        </div>
      </div>
    </div>
  </div>
);}
export default Profile;