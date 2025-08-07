"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";
import FileInput from "../form/input/FileInput";

type Product = {
    id: number;
    name: string;
    unit: string;
    description: String;
    category: Category;
    supplier: Supplier;
    price: number;
    stock: number;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    product?: Product | null;
};

type Supplier = {
    id: string | number;
    name: string;
};

type Category = {
    id: string | number;
    name: string;
};

type ValidationDetail = {
    loc?: (string | number)[];
    msg: string;
    type?: string;
};

function isApiValidationError(err: unknown): err is {
    response: { data: { detail: ValidationDetail[] } };
} {
    return (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        Array.isArray(
            typeof (err as { response?: { data?: { detail?: unknown } } }).response?.data?.detail === "object"
                ? (err as { response: { data: { detail: unknown } } }).response.data.detail
                : []
        )

    );
}

export default function EditProductModal({ isOpen, onClose, onSuccess, product }: Props) {
    const [form, setForm] = useState({
        name: "",
        description: "",
        supplier_id: "",
        category_id: "",
        price: 1,
        stock: 0,
        unit: "",
    });
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        api.get<Supplier[]>("/suppliers")
            .then(setSuppliers)
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.error("Failed to fetch suppliers:", err.message);
                } else {
                    console.error("Unknown error while fetching suppliers");
                }
            });

        api.get<Category[]>("/categories")
            .then(setCategories)
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.error("Failed to fetch categories:", err.message);
                } else {
                    console.error("Unknown error while fetching categories");
                }
            });

    }, [isOpen]);
    useEffect(() => {
        if (product) {
            setForm({
                name: product.name,
                description: "", // If you don't have description, leave it empty
                supplier_id: String(product.supplier.id),
                category_id: String(product.category.id),
                price: product.price,
                stock: product.stock,
                unit: product.unit,
            });
            setImage(null);
        }
    }, [product]);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]:
                type === "number"
                    ? value === ""
                        ? ""
                        : Number(value)
                    : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("supplier_id", String(form.supplier_id));
        formData.append("price", String(form.price));
        formData.append("stock", String(form.stock));
        formData.append("unit", form.unit);
        if (form.category_id.trim()) {
            formData.append("category_id", form.category_id);
        }

        if (image) {
            formData.append("image", image);
        }

        try {
            const method = product ? "put" : "post";
            const url = product ? `/products/${product.id}` : "/products";

            const response = await api[method](url, formData);
            console.log(`✅ Product ${product ? "updated" : "created"}:`, response);
            onSuccess();
            onClose();
            setForm({
                name: "",
                description: "",
                supplier_id: "",
                category_id: "",
                price: 1,
                stock: 0,
                unit: "",
            });
            setImage(null);
        } catch (err: unknown) {
            console.error(`❌ Failed to ${product ? "update" : "add"} product:`, err);
            if (isApiValidationError(err)) {
                const details = err.response.data.detail;
                const formatted = details.map((d) => `${d.loc?.join(".")}: ${d.msg}`).join("\n");
                alert("Validation failed:\n" + formatted);
            } else if (err instanceof Error) {
                alert("Unexpected error: " + err.message);
            } else {
                alert("Unexpected unknown error");
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Add Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
                    <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">Supplier</label>
                        <select
                            name="supplier_id"
                            value={form.supplier_id}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="">Select Supplier</option>
                            {suppliers.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">Category</label>
                        <select
                            name="category_id"
                            value={form.category_id}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="">Select Category</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input name="price" type="number" step={0.01} placeholder="Price" value={form.price} onChange={handleChange} required />
                    <Input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />
                    <Input name="unit" placeholder="Unit" value={form.unit} onChange={handleChange} required />

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">Image</label>
                        <FileInput type="file" accept="image/*" onChange={handleFileChange} required />
                    </div>

                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Update Product"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
