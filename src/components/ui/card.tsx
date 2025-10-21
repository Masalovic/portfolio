import React from "react";

export function Card(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return <div className={`rounded-2xl border bg-white ${className}`} {...rest} />;
}

export function CardHeader(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return <div className={`p-4 border-b ${className}`} {...rest} />;
}

export function CardTitle(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return <div className={`font-semibold ${className}`} {...rest} />;
}

export function CardContent(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", ...rest } = props;
  return <div className={`p-4 ${className}`} {...rest} />;
}

export default Card;
