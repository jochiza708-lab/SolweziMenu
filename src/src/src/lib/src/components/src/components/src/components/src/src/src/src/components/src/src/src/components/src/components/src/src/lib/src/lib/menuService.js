import { supabase } from "./supabase";

export async function getRestaurants() {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getRestaurantMenu(restaurantId) {
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .order("name", { ascending: true });

  if (error) {
    throw error;
  }

  return data || [];
}
