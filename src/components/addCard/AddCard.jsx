import { useForm } from "react-hook-form";

const AddCard = ({ setCard, cards }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setCard([...cards, data]);

    localStorage.setItem("data", JSON.stringify([...cards, data]));
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="enter bank name"
          {...register("bank", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.bank?.type === "required" && (
          <span className="spn">BankName is required </span>
        )}

        {errors.bank?.type === "maxLength" && (
          <span className="spn">Enter 10 Letter </span>
        )}

        <input
          type="number"
          placeholder="enter card number"
          {...register("number", {
            required: true,
            maxLength: 12,
            minLength: 12,
          })}
        />
        {errors.number?.type === "required" && (
          <span className="spn">Number is required</span>
        )}

        {errors.number?.type === "maxLength" && (
          <span className="spn">Enter 12 Number </span>
        )}

        {errors.number?.type === "minLength" && (
          <span className="spn">Min 12 Number </span>
        )}

        <input
          type="date"
          placeholder="enter validFrom date "
          {...register("validFrom", {
            required: true,
          })}
        />
        {errors.validFrom?.type === "required" && (
          <span className="spn">ValidForm is required</span>
        )}

        <input
          type="date"
          placeholder="enter exp date"
          {...register("validTo", {
            required: true,
          })}
        />
        {errors.validTo?.type === "required" && (
          <span className="spn">ExpDate is required</span>
        )}

        <input
          type="text"
          placeholder="enter your name"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name?.type === "required" && (
          <span className="spn">Name is required</span>
        )}

        <input
          type="number"
          placeholder="enter cvv"
          {...register("cvv", {
            required: true,
            maxLength: 3,
            minLength: 3,
          })}
        />
        {errors.cvv?.type === "required" && (
          <span className="spn">CVV is required</span>
        )}

        {errors.cvv?.type === "maxLength" && (
          <span className="spn">Enter 3 Number</span>
        )}

        {errors.cvv?.type === "minLength" && (
          <span className="spn">Min 3 Number </span>
        )}

        <button>Add</button>
      </form>
    </>
  );
};

export default AddCard;
