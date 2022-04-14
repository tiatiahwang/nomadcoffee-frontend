import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/auth/Button';
import FormError from '../components/auth/FormError';
import Input from '../components/auth/Input';
import PageTitle from '../components/PageTitle';
import {
  CreateCoffeeShopMutation,
  useCreateCoffeeShopMutation,
} from '../graphql/generated';

interface IForm {
  shopname: string;
  longitude: string;
  latitude: string;
  categories: string;
  photos: [];
  result?: boolean;
}

const ShopForm = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState<FileList>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onChange' });
  const onCompleted = (data: CreateCoffeeShopMutation) => {
    const {
      createCoffeeShop: { ok, error },
    } = data;
    if (!ok) {
      return setError('result', { message: error! });
    }
    navigate('/');
  };
  const [createCoffeeShop, { loading }] = useCreateCoffeeShopMutation({
    onCompleted,
  });
  const formSubmit = (data: IForm) => {
    if (loading) return;
    const { shopname, latitude, longitude, categories } = data;
    createCoffeeShop({
      variables: {
        name: shopname,
        latitude,
        longitude,
        photos: fileList,
        categories,
      },
    });
  };
  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    setFileList(files);
  };

  return (
    <>
      <PageTitle title="샵추가" />
      <form onSubmit={handleSubmit((data) => formSubmit(data as IForm))}>
        <Input
          {...register('shopname', {
            required: '필수 입력 사항입니다',
          })}
          name="shopname"
          type="text"
          placeholder="샵이름"
          hasError={Boolean(errors?.shopname?.message)}
        />
        <FormError message={errors?.shopname?.message} />
        <Input
          {...register('latitude', {
            required: '필수 입력 사항입니다',
          })}
          name="latitude"
          type="text"
          placeholder="위도"
          hasError={Boolean(errors?.latitude?.message)}
        />
        <FormError message={errors?.latitude?.message} />
        <Input
          {...register('longitude', {
            required: '필수 입력 사항입니다',
          })}
          name="longitude"
          type="text"
          placeholder="경도"
          hasError={Boolean(errors?.longitude?.message)}
        />
        <FormError message={errors?.longitude?.message} />
        <Input
          {...register('categories', {
            required: '필수 입력 사항입니다',
          })}
          name="categories"
          type="text"
          placeholder="카테고리 ex)#별 #여행"
          hasError={Boolean(errors?.categories?.message)}
        />
        <FormError message={errors?.categories?.message} />
        <label htmlFor="upload" />
        <Input
          {...register('photos')}
          type="file"
          id="upload"
          accept="image/*"
          multiple
          onChange={fileUpload}
        />
        <Button type="submit" value="추가" />
        <FormError message={errors?.result?.message} />
      </form>
    </>
  );
};

export default ShopForm;
