export const Nav = ({ roles }: any) => {
    return (
        <div>
            <select>
                {roles.map((role: any) => (
                    <option key={role.id} value={role.id}>
                        {role.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
