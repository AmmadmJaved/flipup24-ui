// pages/users.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import Table from '@/components/table';
import Layout from "@/components/pagelayout.tsx/page-layout";
import userService from '@/services/UserService';

// Define the type for User data
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

// // Sample data
// const users: User[] = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
//     { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
// ];

// Create a column helper
const columnHelper = createColumnHelper<User>();

// Define columns using the column helper
const userColumns: ColumnDef<User, any>[] = [
    columnHelper.accessor('_id', {
        header: 'ID',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('role', {
        header: 'role',
        cell: (info) => info.getValue(),
    }),
];

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<any>([]); // State to store users
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    const userColumns: ColumnDef<User, any>[] = [
        columnHelper.accessor("_id", {
            header: "ID",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("name", {
            header: "Name",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("email", {
            header: "Email",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("role", {
            header: "Role",
            cell: (info) => info.getValue(),
        }),
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <button
                        onClick={() => handleEdit(row.original._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(row.original._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    // Handle Edit User
    const handleEdit = async (id: string) => {
        const newName = prompt("Enter new name:");
        if (newName) {
            await userService.editUser(id, { name: newName });
            fetchUsers(); // Refresh user list
        }
    };

    // Handle Delete User
    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this user?")) {
            await userService.deleteUser(id);
            fetchUsers(); // Refresh user list
        }
    };

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;


    useEffect(() => {
        fetchUsers(); // Fetch the users
    }, []); // Empty dependency array ensures it runs once on mount

    const fetchUsers = async () => {
        try {
            const data = await userService.getAllUsers();
            setUsers(data);
        } catch (err) {
            setError("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading if data is still being fetched
    }

    if (error) {
        return <div>{error}</div>; // Show error message if fetching failed
    }
    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">User List</h1>
                <Table columns={userColumns} data={users} />
            </div>
        </Layout>
    );
};

export default UsersPage;
