import { SourcePlatform, SourcePlatformTypes } from "../middleware/SourcePlatform/SourcePlatform";

export class Product {
    id: number;
    source_platform: SourcePlatformTypes;
    date_last_upserted: string;
    name: string;
    description: string;
    brand: string;
    keywords_provided: string;
    weight_kg: number;
    weight_lb: number;
    item_dimensions_original: string;
    package_dimensions_original: string;
    package_volume_in: number;
    price_usd: number;
    min_order_quantity: number;
    shipping_cost_per_10_usd: number;
    url: string;
    lead_time_days: number;
    shipping_time_days: number;
    amazon_asin: string;
    amazon_url: string;
}