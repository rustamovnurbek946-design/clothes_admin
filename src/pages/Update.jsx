import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import inctance from "../axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function Update() {
  let nav = useNavigate();
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleGetId(id) {
    const res = await inctance.get(`/fruits/${id}`);
    return res.data;
  }

  async function handleUpdate(updatedData) {
    await inctance.put(`/fruits/${id}`, updatedData);
    nav("/");
  }

  const { error, isLoading, data } = useQuery({
    queryKey: ["getFruitById", id],
    queryFn: () => handleGetId(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: handleUpdate,
    onSuccess: () => {
      Swal.fire({
        title: "✅ Muvaffaqiyatli o'zgartirildi!",
        text: "Sizning kiyim ma'lumotlaringiz yangilandi 👔",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
        background: "#1f2937",
        color: "#f9fafb",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      setTimeout(() => nav("/"), 1800);
    },
  });

  const onSubmit = (data_) => {
    Swal.fire({
      title: "⏳ O'zgartirilmoqda...",
      text: "Iltimos, kuting",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    mutation.mutate(data_);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-indigo-400 text-xl animate-pulse">
        Yuklanmoqda...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-400 text-lg">
        Ma'lumot yuklanishda xatolik
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <Card className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-md bg-gray-800/80 hover:shadow-indigo-900 transition-all duration-300">
        <Typography
          variant="h4"
          className="text-center font-extrabold mb-6 text-white"
        >
          Update Clothe 👔
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Ortga va Update tugmalari */}
          <div className="flex gap-4 mb-4">
            <Button
              onClick={() => nav(-1)}
              variant="outlined"
              color="gray"
              className="flex-1 text-white hover:bg-gray-700/50 transition-all"
            >
              Ortga
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Update
            </Button>
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">Clothes Name</Typography>
            <Input
              defaultValue={data?.name}
              {...register("name", { required: true })}
              size="lg"
              placeholder="Enter clothes name"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">
                Please enter a clothes name
              </p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">
              Clothes Description
            </Typography>
            <Input
              defaultValue={data?.desc}
              {...register("desc", { required: true })}
              size="lg"
              placeholder="Enter Clothes description"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.desc && (
              <p className="text-red-400 text-sm mt-1">
                Description is required
              </p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">
              Clothes Price
            </Typography>
            <Input
              defaultValue={data?.price}
              {...register("price", { required: true })}
              size="lg"
              placeholder="Enter price"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">Price is required</p>
            )}
          </div>

          <div>
            <Typography className="mb-2 text-gray-200">
              Clothes Image URL
            </Typography>
            <Input
              defaultValue={data?.image}
              {...register("image", { required: true })}
              size="lg"
              placeholder="Enter image URL"
              className="!border-gray-600 focus:!border-indigo-500 bg-gray-700/50 text-white rounded-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.image && (
              <p className="text-red-400 text-sm mt-1">Image URL is required</p>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Update;
