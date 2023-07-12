import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, categoryList } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategoryList = useSetRecoilState(categoryList);
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategoryList((prevCategoryList) => [category, ...prevCategoryList]);
    setCategory(category);
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a new category",
        })}
        placeholder="New Category"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateCategory;
