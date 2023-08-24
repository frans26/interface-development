import Image from "../image/Image";

const Headline = () => {
  return (
    <section className="pt-6 md:py-32">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 sm:px-12 lg:px-36">
        <div>
          <Image name="person" clickable />
        </div>

        <div>
          <Image name="fruits" clickable />
          <Image name="veggies" className="mt-6" clickable />
        </div>

        <div>
          <div className="pt-1 pb-3 border-b">
            <h3 className="open-sans-light text-[26px]">
              ANSWER YOUR BODY'S NEEDS
            </h3>
          </div>

          <p className="open-sans-light text-light-grey leading-7 mt-7 text-lg">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally devolops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </p>

          <p className="text-strong-red mt-10 open-sans-semibold">BE MINDFUL</p>

          <p className="mt-4 open-sans-semibold text-lg">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating
          </p>
        </div>
      </div>
    </section>
  );
};

export default Headline;
