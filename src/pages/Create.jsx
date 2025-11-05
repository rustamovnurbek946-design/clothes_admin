import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import inctance from "../axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

export function SimpleRegistrationForm() {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleCreate(newdata) {
    await inctance.post("/fruits", newdata);
  }

  const mutation = useMutation({
    mutationFn: handleCreate,
    onSuccess: () => {
      Swal.fire({
        title: "👔 Muvaffaqiyatli yaratildi!",
        text: "Kiyim ro‘yxatga muvaffaqiyatli qo‘shildi 🌿",
        icon: "success",
        background: "#1f2937",
        color: "#f9fafb",
        confirmButtonText: "Ajoyib!",
        confirmButtonColor: "#6366f1",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then(() => {
        nav("/");
      });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gray-800/80 backdrop-blur-md border border-gray-700">
        <Typography
          variant="h3"
          className="text-center font-bold mb-6 text-white"
        >
          👔 Create Clothes
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <Typography className="mb-2 text-gray-200">Clothes Name</Typography>
            <Input
              {...register("name", { required: true })}
              size="lg"
              placeholder="Enter clothes name"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">Clothes Description</Typography>
            <Input
              {...register("desc", { required: true })}
              size="lg"
              placeholder="Enter description"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
            />
            {errors.desc && (
              <p className="text-red-400 text-sm mt-1">Description is required</p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">Clothes Price</Typography>
            <Input
              {...register("price", { required: true })}
              size="lg"
              placeholder="Enter price (so'm)"
              type="number"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">Price is required</p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">Clothes Image URL</Typography>
            <Input
              {...register("image", { required: true })}
              size="lg"
              placeholder="Enter image link"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
            />
            {errors.image && (
              <p className="text-red-400 text-sm mt-1">Image URL is required</p>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            className="mt-4 py-3 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Create Clothes 👔
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default SimpleRegistrationForm;
                