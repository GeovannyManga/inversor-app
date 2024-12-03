import React from 'react'
import DetailCard from "../components/detailCard.js";
import { useRoute} from "@react-navigation/native";

export default function Details() {
  const router =  useRoute()
  const {name, price, dailyChange, sym} =  router.params
  return (
    <DetailCard name={name} price={price} dailyChange={dailyChange} sym={sym} />
  )
}
