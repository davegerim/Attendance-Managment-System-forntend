import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
      >
        <Stepper.Step label="First step" description="Personal Profile">
          Step 1 content: Personal Profile
          <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="Phone number"
                >
                  Phone number
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
          </form>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Location">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export default Demo;
