import { MinusSquareIcon, PlusSquareIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { formatCurrency } from '../utils/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 0;
  return (
    <Card key={id} className="rounded-xl px-2 m-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(price)}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={imgUrl}
          alt="product image"
          width={340}
          className="object-cover"
        />
      </CardContent>
      <hr className="h-[.02rem] bg-blue-200 border-none mb-6" />
      <CardFooter>
        {quantity === 0 ? (
          <Button variant="outline" className="border-slate-900 rounded-lg">
            + Add To Cart
          </Button>
        ) : (
          <div className="flex flex-col justify-center gap-2 items-center">
            <div className="flex justify-center items-center">
              <Button variant="ghost">
                <PlusSquareIcon height={35} width={35} />
              </Button>
              <div>
                <span className="text-2xl font-semibold">{quantity}</span> in
                cart
              </div>
              <Button variant="ghost" size="icon" className="ml-3">
                <MinusSquareIcon height={35} width={35} />
              </Button>
            </div>

            <Button
              variant="destructive"
              className="bg-red-400 rounded-xl mt-4 text-white"
            >
              Clear from Cart
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default StoreItem;
